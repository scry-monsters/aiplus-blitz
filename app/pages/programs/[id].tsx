import Layout from "app/core/layouts/Layout"
import { BlitzPage, NotFoundError, useRouter } from "blitz"
import db, { Program, ProgramBenefit, ProgramWhy, Subject } from "db"
import { lazy, Suspense } from "react"

const ProgrammsDetail = lazy(() => import("app/programs/components/ProgramDetail"))

interface Props {
  program: Pick<
    Program,
    | "id"
    | "titleKz"
    | "titleRu"
    | "shortSchoolNameRu"
    | "shortSchoolNameKz"
    | "fullSchoolNameRu"
    | "fullSchoolNameKz"
    | "subTitleRu"
    | "subTitleKz"
    | "logo"
    | "youtubeVideoId"
    | "videoTitleRu"
    | "videoTitleKz"
    | "factAboutProgramKz"
    | "factAboutProgramRu"
    | "titleWhyRu"
    | "titleWhyKz"
    | "textWhyKz"
    | "textWhyRu"
  > & {
    ProgramWhy: ProgramWhy[]
    ProgramBenefits: ProgramBenefit[]
    ProgramSubject: {
      subject: Subject
    }[]
  }
}

const ProgramDetailPage: BlitzPage<Props> = ({ program }) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  return (
    <Suspense fallback={<div></div>}>
      <ProgrammsDetail data={program} />
    </Suspense>
  )
}

ProgramDetailPage.suppressFirstRenderFlicker = true
ProgramDetailPage.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default ProgramDetailPage

export const getStaticProps = async (context) => {
  const program = await db.program.findUnique({
    where: {
      id: parseInt(context.params?.id),
    },
    select: {
      id: true,
      titleRu: true,
      titleKz: true,
      shortSchoolNameRu: true,
      shortSchoolNameKz: true,
      fullSchoolNameRu: true,
      fullSchoolNameKz: true,
      subTitleRu: true,
      subTitleKz: true,
      logo: true,
      youtubeVideoId: true,
      videoTitleRu: true,
      videoTitleKz: true,
      factAboutProgramKz: true,
      factAboutProgramRu: true,
      titleWhyRu: true,
      titleWhyKz: true,
      textWhyKz: true,
      textWhyRu: true,
      ProgramBenefits: true,
      ProgramWhy: true,
      ProgramSubject: {
        select: {
          subject: true,
        },
      },
    },
  })
  if (!program) throw new NotFoundError()
  return {
    props: {
      program,
    },
  }
}

export const getStaticPaths = async () => {
  const teachers = await db.program.findMany({
    select: { id: true },
  })
  return {
    paths: teachers.map((item) => ({
      params: { id: item.id.toString() },
    })),
    fallback: true,
  }
}
