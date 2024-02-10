import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import * as fs from "fs";
import { TRPCError } from "@trpc/server";

// incorrect type lol
const isTheLangFile = JSON.parse(
  // read file, convert to buffer, convert buffer to utf8 str, parse as json, cast type to an object
  fs.readFileSync("./public/lang/en_US.json").toString("utf-8"),
) as Record<string, z.ZodString>;

for (const key of Object.keys(isTheLangFile)) isTheLangFile[key] = z.string();

export const placeholderRouter = createTRPCRouter({
  editLang: publicProcedure
    .input(z.object(isTheLangFile))
    .mutation(async ({ input }) => {
      // use writeFileSync for a less synchronous approach
      fs.writeFile(
        "./public/lang/en_US.json",
        JSON.stringify(input),
        (err) => {
          if (err) {
            console.log(err);
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
          }
        },
      );
    }),
});
