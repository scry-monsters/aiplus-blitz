import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetProgramsInput
  extends Pick<Prisma.ProgramFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(async ({ where, orderBy, skip = 0, take = 100 }: GetProgramsInput) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const {
    items: programs,
    hasMore,
    nextPage,
    count,
  } = await paginate({
    skip,
    take,
    count: () => db.program.count({ where }),
    query: (paginateArgs) => db.program.findMany({ ...paginateArgs, where, orderBy }),
  })

  return {
    programs,
    nextPage,
    hasMore,
    count,
  }
})
