import { z } from "zod";
import axios from "axios";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { API_BASE, AUTH, type Items, type Item, type Inventory, Variant, VariantLinkedItem, VaritStock } from "~/utils/loyverse";
import { TRPCError } from "@trpc/server";

// warning: NOT Items. Item[] is NOT Items.
const cleanItem = (items: Item[]): Item[] => {
  return items;
}

export const mongoRouter = createTRPCRouter({
    getItemByLoyverseId: publicProcedure
    .input(z.object({id: z.string()}))    
    .query(async ({ ctx, input }) => {
        return await ctx.db.item.findFirst({
            where: {
                OR: [
                    {
                        loyverseItemID: input.id
                    },
                    {
                        loyverseVariantID: input.id
                    }
                ]
            }
        });
    }),

    updateDatabase: publicProcedure
        .mutation(async ({ ctx }) => {
            const { data: retrievedItems }: { data: Items; } = await axios.get(API_BASE + "/items", {
                headers: {
                  'Authorization': AUTH
                }
            });

            for ( const item of retrievedItems.items) {
                for (const variant of item.variants) 
                {
                    ctx.db.item.create({
                        data: {
                            restockDate: null,
                            loyverseItemID: variant.item_id,
                            loyverseVariantID: variant.variant_id
                        }
                    });
                }
            }
        })
})  