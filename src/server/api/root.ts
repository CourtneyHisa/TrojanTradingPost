import { createTRPCRouter } from "~/server/api/trpc";
import { lvRouter } from "./routers/loyverse";
import { mongoRouter } from "./routers/mongo";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  loyverse: lvRouter,
  mongo: mongoRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
