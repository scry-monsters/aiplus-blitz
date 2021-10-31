import CameraIcon from "app/core/components/Reviews/CameraIcon"
import useLocalizedProp from "app/core/hooks/useLocalizedProp"
import { Link, Image } from "blitz"
import { Blog } from "db"
import { FC } from "react"

interface Props {
  blog: Blog
}

const BlogsListItem: FC<Props> = ({ blog }) => {
  const l = useLocalizedProp()
  return (
    <li className="teachers-list__item">
      <Link href={`/blogs/${blog.id}`}>
        <Image
          width={370}
          height={370}
          src={blog.image || ""}
          alt=""
          className="teachers-list__img"
        />
      </Link>
      <div className="teachers-list__content">
        <div className="teachers-list__name">{l(blog, "title")} </div>
        <div className="teachers-list__job">{l(blog, "description")}</div>
        {/* <div className="teachers-list__text">“{blog.sloganRu}”</div> */}
      </div>
      <div className="teachers-list__links">
        <Link href={`/blogs/${blog.id}`}>
          <a className="button teachers-list__link">Подробно</a>
        </Link>
        <Link href={`/blogs/${blog.id}`}>
          <a
            className="button teachers-list__link jsBmButton"
            data-target="#iframe-modal"
            data-toggle="modal"
            data-bmsrc="https://www.youtube.com/embed/"
          >
            <CameraIcon />
          </a>
        </Link>
      </div>
    </li>
  )
}

export default BlogsListItem
