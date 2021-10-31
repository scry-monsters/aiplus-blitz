import { BlitzPage, useQuery } from "blitz"
import React, { lazy, Suspense } from "react"
import Layout from "app/core/layouts/Layout"
import { Blog } from "db"
import getBlogsMenuItems from "app/blogs/queries/getBlogsMenuItems"
import getBlogs from "app/blogs/queries/getBlogs"
import BlogsListItem from "app/blogs/components/BlogsListItem"

const BlogsPage = lazy(() => import("app/blogs/components/BlogsPage"))

interface IBlogsBreadcrumbsItem {
  id: string
  link?: string
  title: string
}

interface IBlogsMenuItem {
  id: number
  titleRu: string
  titleKz: string
  BlogAndTagForBlog: {
    blog: Blog | null
  }[]
}

const breadcrumbs: IBlogsBreadcrumbsItem[] = [
  { id: "0", link: "/", title: "Главная" },
  { id: "1", link: "/", title: "блог" },
]

const Blogs: BlitzPage = () => {
  const [menuItems, { isLoading }] = useQuery(getBlogsMenuItems, null)
  const [{ blogs }] = useQuery(getBlogs, { skip: 0 })

  if (isLoading) return <div></div>

  return (
    <Suspense fallback={<div></div>}>
      <BlogsPage menuItems={menuItems as IBlogsMenuItem[]} breadcrumbs={breadcrumbs} title="Блог">
        <ul className="teachers-list">
          {blogs.map((item) => {
            return <BlogsListItem key={item.id} blog={item} />
          })}
        </ul>
      </BlogsPage>
    </Suspense>
  )
}
Blogs.suppressFirstRenderFlicker = true
Blogs.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Blogs
