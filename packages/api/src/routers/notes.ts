/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */

import { z } from "zod";
import { createRouter } from "../createRouter";

export const notesRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.note.findMany();
    },
  })
  .mutation("create", {
    input: z.object({
      title: z.string().min(1).max(255),
      content: z.string().max(5000),
      authorId: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.note.create({
        data: {
          title: input.title,
          content: input.content,
          author: {
            connect: {
              id: input.authorId,
            },
          },
        },
      });
    },
  });
