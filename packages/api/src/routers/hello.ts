/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */

import { z } from "zod";
import { createRouter } from "../createRouter";

export const helloRouter = createRouter().query("world", {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),
  resolve({ ctx, input }) {
    return {
      greeting: `hello ${input?.text ?? "world"}`,
    };
  },
});
