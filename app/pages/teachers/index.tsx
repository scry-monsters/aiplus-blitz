import { BlitzPage, useQuery, useInfiniteQuery } from "blitz"
import React, { lazy, Suspense } from "react"
import Layout from "app/core/layouts/Layout"
import { Teacher } from "db"
import getTeachersMenuItems from "app/teachers/queries/getTeachersMenuItems"
import getTeachers from "app/teachers/queries/getTeachers"
import TeachersListItem from "app/teachers/components/TeachersListItem"

const TeachersPage = lazy(() => import("app/teachers/components/TeachersPage"))

interface ITeachersBreadcrumbsItem {
  id: string
  link?: string
  title: string
}

interface ITeachersMenuItem {
  id: number
  titleRu: string
  titleKz: string
  teachers: Teacher[]
}

const breadcrumbs: ITeachersBreadcrumbsItem[] = [
  { id: "0", link: "/", title: "Главная" },
  { id: "1", link: "/", title: "Наши преподаватели" },
]

const Teachers: BlitzPage = () => {
  const [menuItems, { isLoading }] = useQuery(getTeachersMenuItems, null)
  const [{ teachers }] = useQuery(getTeachers, { skip: 0 })

  if (isLoading) return <div></div>

  return (
    <Suspense fallback={<div></div>}>
      <TeachersPage
        menuItems={menuItems as ITeachersMenuItem[]}
        breadcrumbs={breadcrumbs}
        title="НАШИ ПРЕПОДАВАТЕЛИ"
      >
        <ul className="teachers-list">
          {teachers.map((item) => {
            return <TeachersListItem key={item.id} teacher={item} />
          })}
        </ul>
      </TeachersPage>
    </Suspense>
  )
}
Teachers.suppressFirstRenderFlicker = true
Teachers.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Teachers
