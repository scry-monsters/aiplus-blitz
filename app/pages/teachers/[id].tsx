import { BlitzPage, useQuery, NotFoundError, useRouter, Ctx, GetStaticProps } from "blitz"
import React, { Suspense } from "react"
import Layout from "app/core/layouts/Layout"
import getTeachersMenuItems from "app/teachers/queries/getTeachersMenuItems"

import db, { Teacher } from "db"
import TeachersPage from "app/teachers/components/TeachersPage"
import TeacherInfo from "app/teachers/components/TeacherInfo"

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

interface Props {
  teacher: Teacher
  menuItems: ITeachersMenuItem[]
}

const TeachersDetailPage: BlitzPage<Props> = ({ teacher, menuItems }) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const breadcrumbs: ITeachersBreadcrumbsItem[] = [
    { id: "0", link: "/", title: "Главная" },
    { id: "1", link: "/teachers", title: "Наши преподаватели" },
    { id: "2", link: `/teachers/${teacher.id}`, title: teacher.fioRu },
  ]
  return (
    <Suspense fallback={<div></div>}>
      <TeachersPage
        menuItems={menuItems as ITeachersMenuItem[]}
        breadcrumbs={breadcrumbs}
        title={teacher.fioRu}
      >
        <TeacherInfo data={teacher} />
      </TeachersPage>
    </Suspense>
  )
}
TeachersDetailPage.suppressFirstRenderFlicker = true
TeachersDetailPage.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default TeachersDetailPage

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (context) => {
  const menuItems = await getTeachersMenuItems(null, {} as Ctx)
  const teacher = await db.teacher.findUnique({
    where: {
      id: parseInt(context.params!.id),
    },
  })
  if (!teacher) throw new NotFoundError()
  return {
    props: {
      teacher,
      menuItems,
    },
  }
}

export const getStaticPaths = async () => {
  const teachers = await db.teacher.findMany({
    select: { id: true },
  })
  return {
    paths: teachers.map((item) => ({
      params: { id: item.id.toString() },
    })),
    fallback: true,
  }
}
