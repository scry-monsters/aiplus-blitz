import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetMenuItem = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetMenuItem), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const menuItem = await db.menuItem.findFirst({ where: { id } })

  if (!menuItem) throw new NotFoundError()

  return menuItem
})
