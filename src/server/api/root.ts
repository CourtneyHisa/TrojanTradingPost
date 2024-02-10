import { createTRPCRouter } from "~/server/api/trpc";
import { itemRouter } from "./routers/item";
import { placeholderRouter } from "./routers/placeholder";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  item: itemRouter,
  test: placeholderRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
