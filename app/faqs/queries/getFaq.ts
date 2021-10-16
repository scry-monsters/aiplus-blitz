import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetFaq = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetFaq), async ({ id }) => {
  const faq = await db.faq.findFirst({ where: { id } })
  if (!faq) throw new NotFoundError()
  return faq
})
