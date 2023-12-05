import { z } from "zod";
import axios from "axios";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { API_BASE, AUTH } from "~/utils/loyverse";

export const itemRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async ({ }) => {
      const { data } = await axios.get(API_BASE + "/items", {
        headers: {
          'Authorization': "Bearer " + AUTH
        }
      });
      return data as unknown;
    }),
});
