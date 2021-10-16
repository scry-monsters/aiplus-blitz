import { BlitzPage, useQuery, useInfiniteQuery } from "blitz"
import React, { lazy, Suspense } from "react"
import Layout from "app/core/layouts/Layout"
import { Student } from "db"
import getStudentsMenuItems from "app/students/queries/getStudentsMenuItems"
import getStudents from "app/students/queries/getStudents"
// import StudentsPage from 'app/students/components/StudentsPage';
import StudentsListItem from "app/students/components/StudentsListItem"

const StudentsPage = lazy(() => import("../../components/StudentsPage"))

interface IStudentsMenuItem {
  Student: Student[]
  id: number
  titleRu: string
  titleKz: string
  shortSchoolNameRu: string | null
  shortSchoolNameKz: string | null
}

interface IStudentsBreadcrumbsItem {
  id: string
  link?: string
  title: string
}

const breadcrumbs: IStudentsBreadcrumbsItem[] = [
  { id: "0", link: "/", title: "Главная" },
  { id: "1", link: "/", title: "Наши ученики" },
]

const ITEMS_PER_PAGE = 10

const Teachers: BlitzPage = () => {
  const [menuItems, { isLoading }] = useQuery(getStudentsMenuItems, {})
  const [results, { isFetching, isFetchingNextPage, fetchNextPage, hasNextPage }] =
    useInfiniteQuery(getStudents, (page = { take: ITEMS_PER_PAGE, skip: 0 }) => page, {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    })
  const students = results ? results.map(({ students }) => students).flat() : []
  const count = (results && results.at(-1)?.count) || 0

  if (isLoading) return <div></div>

  return (
    <Suspense fallback={<div></div>}>
      <StudentsPage
        menuItems={menuItems as IStudentsMenuItem[]}
        breadcrumbs={breadcrumbs}
        title="НАША ГОРДОСТЬ"
      >
        <ul className="students-list">
          {students.map((item) => {
            return <StudentsListItem key={item.id} student={item} />
          })}
          {(isFetching || isFetchingNextPage) && <p>Loading...</p>}
          <div className="col-12">
            <button
              className="button -default mx-auto d-block mb-4"
              disabled={!hasNextPage || isFetchingNextPage}
              onClick={() => fetchNextPage()}
            >
              Загрузить ещё
            </button>
          </div>
        </ul>
      </StudentsPage>
    </Suspense>
  )
}
Teachers.suppressFirstRenderFlicker = true
Teachers.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Teachers
