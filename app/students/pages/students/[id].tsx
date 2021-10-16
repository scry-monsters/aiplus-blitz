import { BlitzPage, useQuery } from "blitz"
import React, { lazy, Suspense } from "react"
import Layout from "app/core/layouts/Layout"
import getStudentsMenuItems from "app/students/queries/getStudentsMenuItems"

import db, { Student } from "db"
import StudentsPage from "app/students/components/StudentsPage"
import StudentInfo from "app/students/components/StudentInfo"

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

const ITEMS_PER_PAGE = 10

interface Props {
  student: Student & {
    program: {
      id: number
      titleRu: string
      titleKz: string
      shortSchoolNameRu: string | null
      shortSchoolNameKz: string | null
    }
  }
}

const StudentsDetailPage: BlitzPage<Props> = ({ student }) => {
  const [menuItems, { isLoading }] = useQuery(getStudentsMenuItems, {})
  if (isLoading) return <div></div>

  const breadcrumbs: IStudentsBreadcrumbsItem[] = [
    { id: "0", link: "/", title: "Главная" },
    { id: "1", link: "/students", title: "Наши ученики" },
    { id: "2", link: `/programs/${student.program.id}`, title: student.program.titleRu },
    { id: "2", link: `/students/${student.id}`, title: student.fioRu },
  ]
  return (
    <Suspense fallback={<div></div>}>
      {/* <pre>{JSON.stringify(student, null, '  ')}</pre> */}
      {/* <StudentsDetails data={student} /> */}
      <StudentsPage
        menuItems={menuItems as IStudentsMenuItem[]}
        breadcrumbs={breadcrumbs}
        title={student.fioRu}
      >
        <StudentInfo data={student} />
      </StudentsPage>
    </Suspense>
  )
}
StudentsDetailPage.suppressFirstRenderFlicker = true
StudentsDetailPage.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default StudentsDetailPage

export const getStaticProps = async (context) => {
  const student = await db.student.findUnique({
    where: {
      id: parseInt(context.params?.id),
    },
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
  })
  return {
    props: {
      student,
    },
  }
}

export const getStaticPaths = async () => {
  const students = await db.student.findMany({
    select: { id: true },
  })
  return {
    paths: students.map((item) => ({
      params: { id: item.id.toString() },
    })),
    fallback: true,
  }
}
