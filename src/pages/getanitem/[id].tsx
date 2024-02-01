import { createServerSideHelpers } from "@trpc/react-query/server";
import { GetStaticProps } from "next";
import { db } from "~/server/db";
import { appRouter } from "~/server/api/root";
import superjson from "superjson";
import { TRPCError } from "@trpc/server";
import { api } from "~/utils/api";

export default function lol(props: { id: string}) {
    const aaa = api.item.getItemById.useQuery({ id: props.id });
    return JSON.stringify(aaa, null, '\t')
}

export const getStaticProps:GetStaticProps = async (context) => {
    const ssg = createServerSideHelpers({
      router: appRouter,
      ctx: { db, session: null },
      transformer: superjson
    });
  
    const id = context.params?.id;
    console.log(context.params)
    if(typeof id !== "string") throw new TRPCError({ code: "NOT_FOUND" });
    await ssg.item.getItemById.prefetch({ id });
  
    return {
      props: {
        trpcState: ssg.dehydrate(),
        id
      }
    };
  }
  
  export const getStaticPaths = () => {
    return {paths: [], fallback: "blocking"};
  }