import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetStudentsInput
  extends Pick<Prisma.StudentFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(async ({ where, orderBy, skip = 0, take = 100 }: GetStudentsInput) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const {
    items: students,
    hasMore,
    nextPage,
    count,
  } = await paginate({
    skip,
    take,
    count: () => db.student.count({ where }),
    query: (paginateArgs) =>
      db.student.findMany({
        ...paginateArgs,
        where,
        orderBy,
        include: {
          program: {
            select: {
              id: true,
              shortSchoolNameRu: true,
              shortSchoolNameKz: true,
              titleRu: true,
              titleKz: true,
            },
          },
        },
      }),
  })

  return {
    students,
    nextPage,
    hasMore,
    count,
  }
})
