import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetBlog = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetBlog), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const blog = await db.blog.findFirst({ where: { id } })

  if (!blog) throw new NotFoundError()

  return blog
})
