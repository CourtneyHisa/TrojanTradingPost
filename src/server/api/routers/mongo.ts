import { late, z } from "zod";
import axios from "axios";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { API_BASE, AUTH, type LVItem, type LVInventory, type LVVariant, type VaritStock, type LVCategory, LVVariantsWrapper } from "~/utils/loyverse";
import { Prisma, type Reservation, type Variant } from "@prisma/client";

export const mongoRouter = createTRPCRouter({
  getItemByLoyverseVariantId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const { data: lvVariant }: { data: LVVariant; } = await axios.get(API_BASE + "/variants/" + input.id, {
        headers: {
          'Authorization': AUTH
        }
      });

      const { data: lvItem }: { data: LVItem; } = await axios.get(API_BASE + "/items/" + lvVariant.item_id, {
        headers: {
          'Authorization': AUTH
        }
      });

      const { data: lvCategory }: { data: LVCategory; } = await axios.get(API_BASE + "/categories/" + lvItem.category_id, {
        headers: {
          'Authorization': AUTH
        }
      });

      const lvInventory = ((await axios.get(API_BASE + "/inventory?variant_ids=" + encodeURI(lvVariant.variant_id), {
        headers: {
          'Authorization': AUTH
        }
      })).data as LVInventory).inventory_levels[0]!;

      let mongoData = await ctx.db.variant.findFirst({
        where: {
          loyverseVariantID: input.id,
        },
      });

      if(mongoData === null) {
        const newVariant: Prisma.VariantCreateInput = {
          loyverseItemID: lvVariant.item_id,
          loyverseVariantID: lvVariant.variant_id,
          restockDate: lvInventory.updated_at
        };
        mongoData = await ctx.db.variant.create({
          data: newVariant
        });
      }

      const reservations = await ctx.db.reservation.findMany({
        where: {
          loyverseVariantId: input.id
        }
      })

      const variant: VaritStock & { reservations: Reservation[], mongoDB: Variant } = {
        ...lvVariant,
        item: lvItem,
        category: lvCategory,
        in_stock: lvInventory.in_stock,
        last_restock: new Date(lvInventory.updated_at),

        reservations,
        mongoDB: mongoData
      }

      return variant;

    }),

  updateDatabase: publicProcedure.mutation(async ({ ctx }) => {
    const { data: retrievedVariants }: { data: LVVariantsWrapper } =
      await axios.get(API_BASE + "/variants", {
        headers: {
          Authorization: AUTH,
        },
      });

    const l = await ctx.db.variant.count();
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