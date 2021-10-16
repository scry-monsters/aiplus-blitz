import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetFact = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetFact), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const fact = await db.fact.findFirst({ where: { id } })

  if (!fact) throw new NotFoundError()

  return fact
})
