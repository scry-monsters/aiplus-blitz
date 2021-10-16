import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetTeacher = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetTeacher), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const teacher = await db.teacher.findFirst({ where: { id } })

  if (!teacher) throw new NotFoundError()

  return teacher
})
