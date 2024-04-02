import { createTRPCRouter } from "~/server/api/trpc";
import { lvRouter } from "./routers/loyverse";
import { databaseRouter } from "./routers/db";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  loyverse: lvRouter,
  database: databaseRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
