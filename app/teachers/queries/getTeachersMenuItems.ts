import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(async () => {
  const nish2017 = await db.program.findUnique({
    where: { id: 2 },
    select: {
      id: true,
      titleRu: true,
      titleKz: true,
      shortSchoolNameRu: true,
      shortSchoolNameKz: true,
      Student: {
        where: {
          year: {
            gte: new Date("2017-01-01"),
            lt: new Date("2018-01-01"),
          },
        },
      },
    },
  })

  const nish2018 = await db.program.findUnique({
    where: { id: 2 },
    select: {
      id: true,
      titleRu: true,
      titleKz: true,
      shortSchoolNameRu: true,
      shortSchoolNameKz: true,
      Student: {
        where: {
          year: {
            gte: new Date("2018-01-01"),
            lt: new Date("2019-01-01"),
          },
        },
      },
    },
  })
  const rfmsh2017 = await db.program.findUnique({
    where: { id: 3 },
    select: {
      id: true,
      titleRu: true,
      titleKz: true,
      shortSchoolNameRu: true,
      shortSchoolNameKz: true,
      Student: {
        where: {
          year: {
            gte: new Date("2017-01-01"),
            lt: new Date("2018-01-01"),
          },
        },
      },
    },
  })
  const rfmsh2018 = await db.program.findUnique({
    where: { id: 3 },
    select: {
      id: true,
      titleRu: true,
      titleKz: true,
      shortSchoolNameRu: true,
      shortSchoolNameKz: true,
      Student: {
        where: {
          year: {
            gte: new Date("2018-01-01"),
            lt: new Date("2019-01-01"),
          },
        },
      },
    },
  })
  const rfmsh2019 = await db.program.findUnique({
    where: { id: 3 },
    select: {
      id: true,
      titleRu: true,
      titleKz: true,
      shortSchoolNameRu: true,
      shortSchoolNameKz: true,
      Student: {
        where: {
          year: {
            gte: new Date("2019-01-01"),
            lt: new Date("2020-01-01"),
          },
        },
      },
    },
  })
  const menuItems = [nish2017, nish2018, rfmsh2017, rfmsh2018, rfmsh2019]

  return menuItems
})
