import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetProgram = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetProgram), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const program = await db.program.findFirst({ where: { id } })

  if (!program) throw new NotFoundError()

  return program
})
