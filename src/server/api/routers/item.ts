import { z } from "zod";
import axios from "axios";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { API_BASE, AUTH, type Items, type Item, type Inventory, Variant, VariantLinkedItem, VaritStock } from "~/utils/loyverse";
import { TRPCError } from "@trpc/server";

// warning: NOT Items. Item[] is NOT Items.
const cleanItem = (items: Item[]): Item[] => {
  return items;
}

export const itemRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async () => {
      const { data }: { data: Items; } = await axios.get(API_BASE + "/items", {
        headers: {
          'Authorization': AUTH
        }
      });
      return data;
    }),
  getCleanVariants: publicProcedure
    .query(async () => {
      const { data }: { data: Items; } = await axios.get(API_BASE + "/items", {
        headers: {
          'Authorization': AUTH
        }
      });

      const { data: inventory }: { data: Inventory; } = await axios.get(API_BASE + "/inventory", {
        headers: {
          'Authorization': AUTH
        }
      });
      
      if(!data || !inventory) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Couldn't fetch polish items" });
      /**
       * 
       * Item is a "shell", it contains..:
       * • descriptions
       * • pictures
       * • the different variants of this item
       *  * e.g. the item is a shirt, a variant could be orange shirt
       * • its own ID
       * • NO prices
       * 
       * Variant is the item you can buy, it contains..:
       * • NO description or picture
       * • the cost (maybe the item is 🧋 and the variant is crème brûlée and therefore costs more)
       * • an SKU
       * • the ID of the item it belongs to
       * • an ID unique to the variant
       * 
       * Refer to line 69~ in loyverse.ts (typedef file) on how item/variant works
       * 
       * 
       * In this code snippet, we pull the variants from all the items, and to avoid making more requests to loyverse so we dont get 429'd at the expense of using up more bandwidth and processing power, we map the items so we get each variant, and in the variant, make a new property called "item" that contains the item object from whence it came. So, if you want the item description for the variant, you'd want variant.item.description which may be a PITA, but it's there if needed. flatmap makes it so we convert a list of arrays containing variants to a list of variants. 
       * 
       * EX: 
       * [[a, b], [c, d], [e, f]].flatMap(v=>v) comes out to be [a, b, c, d, e, f], and is similar to
       * [[a, b], [c, d], [e, f]].flat(1) if you dont plan to modify the elements
       */
      const variants: VariantLinkedItem[] = data.items
        .flatMap(item => 
          [...item.variants.map(variant => { (variant as VariantLinkedItem).item = item; return variant as VariantLinkedItem; })] 
        );
      
      return variants.map<VaritStock>(v=> {
        const invEntry = inventory.inventory_levels.find(stock => stock.variant_id === v.variant_id)!;
        return {...v, in_stock: invEntry.in_stock, last_restock: new Date(invEntry.updated_at)} as VaritStock;
      });
    }),
  getItemById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async({ input }) => {
      const { data }: { data: Item; } = await axios.get(API_BASE + "/items/" + input.id, {
        headers: {
          'Authorization': AUTH
        }
      });
      return data;
    }),
  getInventory: publicProcedure
    .query(async () => {
      const { data }: { data: Inventory; } = await axios.get(API_BASE + "/inventory", {
        headers: {
          'Authorization': AUTH
        }
      });
      console.log(data);
      return data;
    }),
});
