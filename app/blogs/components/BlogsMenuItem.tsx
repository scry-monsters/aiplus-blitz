import React, { useState } from "react"
import { Link } from "blitz"
import { Blog } from "db"
import useLocalizedProp from "app/core/hooks/useLocalizedProp"

interface Props {
  data: Blog[]
  title: string
}

const BlogsMenuItem = ({ data, title }: Props) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const displayToggle = open ? { display: "block" } : { display: "none" }
  const l = useLocalizedProp()

  return (
    <div>
      <div className="menu__item">
        <span className={open ? "menu__link-onfocus" : "menu__link"} onClick={handleClick}>
          {title}
        </span>

        {data.length !== 0 && (
          <ul className="menu__sub" style={displayToggle}>
            {data.map((item) => {
              return (
                <Link href={`/blogs/${item.id}`} key={item.id}>
                  <a className="menu__subitem">
                    <span className="menu__sublink">{l(item, "fio")}</span>
                  </a>
                </Link>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default BlogsMenuItem
