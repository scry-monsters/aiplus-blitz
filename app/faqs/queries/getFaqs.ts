import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetFaqsInput
  extends Pick<Prisma.FaqFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(async ({ where, orderBy, skip = 0, take = 100 }: GetFaqsInput) => {
  const {
    items: faqs,
    hasMore,
    nextPage,
    count,
  } = await paginate({
    skip,
    take,
    count: () => db.faq.count({ where }),
    query: (paginateArgs) => db.faq.findMany({ ...paginateArgs, where, orderBy }),
  })

  return {
    faqs,
    nextPage,
    hasMore,
    count,
  }
})
