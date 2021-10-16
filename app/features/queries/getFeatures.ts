import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetFeaturesInput
  extends Pick<Prisma.FeatureFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(async ({ where, orderBy, skip = 0, take = 100 }: GetFeaturesInput) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const {
    items: features,
    hasMore,
    nextPage,
    count,
  } = await paginate({
    skip,
    take,
    count: () => db.feature.count({ where }),
    query: (paginateArgs) => db.feature.findMany({ ...paginateArgs, where, orderBy }),
  })

  return {
    features,
    nextPage,
    hasMore,
    count,
  }
})
