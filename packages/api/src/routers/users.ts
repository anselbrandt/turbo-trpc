/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */

import { z } from "zod";
import { createRouter } from "../createRouter";

export const usersRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany();
    },
  })
  .mutation("create", {
    input: z.object({
      email: z.string().email(),
      name: z.string().min(3),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.user.create({
        data: {
          email: input.email,
          name: input.name,
        },
      });
    },
  });
