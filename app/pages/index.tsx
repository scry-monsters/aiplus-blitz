import { lazy, Suspense } from "react"
import { BlitzPage, QueryClient, getQueryKey, dehydrate } from "blitz"
import Layout from "app/core/layouts/Layout"
import Hero from "app/core/components/Hero/Hero"
import getFaqs from "app/faqs/queries/getFaqs"
import getFeatures from "app/features/queries/getFeatures"

const FactsSection = lazy(() => import("app/core/components/FactsSection/FactsSection"))
const Features = lazy(() => import("app/core/components/Features/Features"))
const StudentsSection = lazy(() => import("app/core/components/StudentsSection/StudentsSection"))
// const StudentsSlider = lazy(()=>import('app/core/components/StudentsSlider/StudentsSlider'))
const Consultation = lazy(() => import("app/core/components/Consultation/Consultation"))
const TeamsSection = lazy(() => import("app/core/components/TeamsSection/TeamsSection"))
const Faq = lazy(() => import("app/core/components/FAQ/Faq"))
const Reviews = lazy(() => import("app/core/components/Reviews/Reviews"))

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div>
        <Hero />
        <Suspense fallback={<div></div>}>
          <FactsSection />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Features />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <StudentsSection />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Consultation />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <TeamsSection />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Faq />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Reviews />
        </Suspense>
      </div>
    </Layout>
  )
}

Home.suppressFirstRenderFlicker = true

export default Home

export const getStaticProps = async (context) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(getQueryKey(getFaqs))
  await queryClient.prefetchQuery(getQueryKey(getFeatures))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
