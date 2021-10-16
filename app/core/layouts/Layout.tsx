import { ReactNode, Suspense } from "react"
import { Head } from "blitz"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "aiplus-blitz"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="layout">
        <div className="layout__wrapper">
          <Header />
          <main role="main" className="layout__main">
            <Suspense fallback={<div></div>}>{children}</Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
