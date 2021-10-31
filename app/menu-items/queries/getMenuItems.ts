import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetMenuItemsInput
  extends Pick<Prisma.MenuItemFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  async ({ where, orderBy, skip = 0, take = 100 }: GetMenuItemsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: menuItems,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.menuItem.count({ where }),
      query: (paginateArgs) =>
        db.menuItem.findMany({ ...paginateArgs, where, orderBy, include: { children: true } }),
    })

    return {
      menuItems,
      nextPage,
      hasMore,
      count,
    }
  }
)
