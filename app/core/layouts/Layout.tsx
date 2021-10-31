import { ReactNode, Suspense } from "react"
import { Head, useQuery } from "blitz"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import getMenuItems from "app/menu-items/queries/getMenuItems"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  const [{ menuItems = [] }] = useQuery(getMenuItems, {
    orderBy: {
      orderNumber: "asc",
    },
    where: {
      parentId: {
        equals: null,
      },
    },
  })
  // const menuItems = [];
  return (
    <>
      <Head>
        <title>{title || "aiplus-blitz"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="layout">
        <div className="layout__wrapper">
          <Header menuItems={menuItems} />
          <main role="main" className="layout__main">
            <Suspense fallback={<div></div>}>{children}</Suspense>
          </main>
          <Footer menuItems={menuItems} />
        </div>
      </div>
    </>
  )
}

export default Layout
