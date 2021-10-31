import { Link, Image } from "blitz"
import BlogsMenuItem from "./BlogsMenuItem"
import styles from "./styles"
import { Blog } from "db"
import useLocalizedProp from "app/core/hooks/useLocalizedProp"

import wave1 from "app/core/assets/images/general/wave1.png"
import wave2 from "app/core/assets/images/general/wave2.png"
import glow1 from "app/core/assets/images/general/glow-1.png"

interface IBlogsMenuItem {
  id: number
  titleRu: string
  titleKz: string
  BlogAndTagForBlog: {
    blog: Blog | null
  }[]
}

interface IBlogsBreadcrumbsItem {
  id: string
  link?: string
  title: string
}

interface Props {
  menuItems: IBlogsMenuItem[]
  breadcrumbs: IBlogsBreadcrumbsItem[]
  title: string
}

const BlogsPage: React.FC<Props> = ({ menuItems = [], breadcrumbs = [], title, children }) => {
  const l = useLocalizedProp()
  return (
    <div className="students-page">
      <div className="page__header bg-orange">
        <div className="container">
          <ul className="breadcrumbs">
            {breadcrumbs.map((item) =>
              item.link ? (
                <li key={item.id} className="breadcrumbs__item">
                  <Link href={item.link || "/"}>
                    <a className="breadcrumbs__link">{item.title} /</a>
                  </Link>
                </li>
              ) : (
                <li key={item.id} className="breadcrums__item">
                  {item.title}
                </li>
              )
            )}
          </ul>
          <h1 className="page__header-title">{title}</h1>
        </div>
        <div className="waves">
          <div className="waves__item" style={{ height: "200px" }}>
            <Image layout="fill" src={wave1} alt="wave 2" />
          </div>
          <div className="waves__item" style={{ height: "300px" }}>
            <Image layout="fill" src={wave2} alt="wave 1" />
          </div>
        </div>
        <div className="glow">
          <Image layout="fill" src={glow1} alt="glow" />
        </div>
      </div>
      <div className="page__content">
        <div className="container">
          <div className="row " data-gutter="20">
            <div className="col-md-4 col-lg-3">
              <div id="menu" className="menu">
                {menuItems.map((item) => (
                  <BlogsMenuItem
                    key={item.id}
                    title={l(item, "title")}
                    data={item.BlogAndTagForBlog.map((a) => a.blog) as Blog[]}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-8 col-lg-9">{children}</div>
          </div>
        </div>
      </div>
      <style jsx global>
        {styles}
      </style>
    </div>
  )
}

export default BlogsPage
