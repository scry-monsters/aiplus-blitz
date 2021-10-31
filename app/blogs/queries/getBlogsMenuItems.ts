import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(async () => {
  if (!db.tagForBlog) {
    throw new Error("Not Found TagForBlog")
  }

  const subjects = await db.tagForBlog.findMany({
    select: {
      id: true,
      titleRu: true,
      titleKz: true,
      BlogAndTagForBlog: {
        select: {
          blog: true,
        },
      },
    },
  })
  return subjects
})
