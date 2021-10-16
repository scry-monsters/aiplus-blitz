import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetTeachersInput
  extends Pick<Prisma.TeacherFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(async ({ where, orderBy, skip = 0, take = 100 }: GetTeachersInput) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const {
    items: teachers,
    hasMore,
    nextPage,
    count,
  } = await paginate({
    skip,
    take,
    count: () => db.teacher.count({ where }),
    query: (paginateArgs) => db.teacher.findMany({ ...paginateArgs, where, orderBy }),
  })

  return {
    teachers,
    nextPage,
    hasMore,
    count,
  }
})
