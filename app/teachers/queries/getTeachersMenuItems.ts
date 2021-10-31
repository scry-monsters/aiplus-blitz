import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(async () => {
  const subjects = await db.subject.findMany({
    select: {
      id: true,
      titleRu: true,
      titleKz: true,
      teachers: true,
    },
  })
  return subjects
})
