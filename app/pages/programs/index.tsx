import { BlitzPage, useQuery } from "blitz"
import React, { lazy, Suspense } from "react"
import Layout from "app/core/layouts/Layout"
import getPrograms from "app/programs/queries/getPrograms"
import ProgramsListItem from "app/programs/components/ProgramsListItem"

const ProgramsPage = lazy(() => import("app/programs/components/ProgramsPage"))

interface IProgramsBreadcrumbsItem {
  id: string
  link?: string
  title: string
}

const breadcrumbs: IProgramsBreadcrumbsItem[] = [
  { id: "0", link: "/", title: "Главная" },
  { id: "1", title: "Все программы" },
]

const Programs: BlitzPage = () => {
  const [{ programs }] = useQuery(getPrograms, { skip: 0 })

  return (
    <Suspense fallback={<div></div>}>
      <ProgramsPage breadcrumbs={breadcrumbs} title="НАШИ ПРЕПОДАВАТЕЛИ">
        <ul className="teachers-list">
          {programs.map((item) => {
            return <ProgramsListItem key={item.id} program={item} />
          })}
        </ul>
      </ProgramsPage>
    </Suspense>
  )
}
Programs.suppressFirstRenderFlicker = true
Programs.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Programs
