import { z } from "zod";
import axios from "axios";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { API_BASE, AUTH, LVVariantsWrapper } from "~/utils/loyverse";
import { Prisma } from "@prisma/client";
import { db } from "~/server/db";

export const mongoRouter = createTRPCRouter({
  getItemByLoyverseId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.item.findFirst({
        where: {
          OR: [
            {
              loyverseItemID: input.id,
            },
            {
              loyverseVariantID: input.id,
            },
          ],
        },
      });
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
