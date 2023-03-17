import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const topicRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.topic.findMany({
      where: {
        topicId: ctx.session?.user.id,
      },
    });
  }),
});
