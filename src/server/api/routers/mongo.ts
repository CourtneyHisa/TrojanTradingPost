import { z } from "zod";
import axios from "axios";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { API_BASE, AUTH, type LVItemsWrapper, type Item, type Inventory, Variant, VariantLinkedItem, VaritStock, LVCategoriesWrapper } from "~/utils/loyverse";
import { Prisma } from "@prisma/client";
import { db } from "~/server/db";

export const mongoRouter = createTRPCRouter({
  getItemByLoyverseVariantId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      let mongoData = await ctx.db.item.findFirst({
        where: {
          loyverseVariantID: input.id,
        },
      });

      const { data: loyverseVariant }: { data: Variant; } = await axios.get(API_BASE + "/variants/" + input.id, {
        headers: {
          'Authorization': AUTH
        }
      });

      const { data: loyverseItem }: { data: Item; } = await axios.get(API_BASE + "/items/" + input.id, {
        headers: {
          'Authorization': AUTH
        }
      });

      let returnedItem = {
        loyverseItemId: loyverseVariant.item_id,
        loyverseVariantId: loyverseVariant.variant_id,
        name: loyverseItem.item_name,

      }
      


    }),

  updateDatabase: publicProcedure.mutation(async ({ ctx }) => {
    const { data: retrievedVariants }: { data: LVVariantsWrapper } =
      await axios.get(API_BASE + "/variants", {
        headers: {
          Authorization: AUTH,
        },
      });

    const l = await ctx.db.item.count();
    console.log(retrievedVariants.variants.map(v => v.item_id + '\t' + v.variant_id + '\t').join('\n'));
    // await ctx.db.item.createMany({
    //   data: retrievedVariants.variants.map((variant) => ({
    //     restockDate: null,
    //     loyverseItemID: variant.item_id,
    //     loyverseVariantID: variant.variant_id,
    //   })),
    // });
  }),
});
