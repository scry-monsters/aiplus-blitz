import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetFactsInput
  extends Pick<Prisma.FactFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(async ({ where, orderBy, skip = 0, take = 100 }: GetFactsInput) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const {
    items: facts,
    hasMore,
    nextPage,
    count,
  } = await paginate({
    skip,
    take,
    count: () => db.fact.count({ where }),
    query: (paginateArgs) => db.fact.findMany({ ...paginateArgs, where, orderBy }),
  })

  return {
    facts,
    nextPage,
    hasMore,
    count,
  }
})
