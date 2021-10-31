import React, { useState } from "react"
import { Link } from "blitz"
import { Teacher } from "db"

interface Props {
  teachers: Teacher[]
  title: string
}

const TeachersMenuItem = ({ teachers, title }: Props) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const displayToggle = open ? { display: "block" } : { display: "none" }

  return (
    <div>
      <div className="menu__item">
        <span className={open ? "menu__link-onfocus" : "menu__link"} onClick={handleClick}>
          {title}
        </span>

        {teachers.length !== 0 && (
          <ul className="menu__sub" style={displayToggle}>
            {teachers.map((item) => {
              return (
                <Link href={`/teachers/${item.id}`} key={item.id}>
                  <a className="menu__subitem">
                    <span className="menu__sublink">{item.fioRu}</span>
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

export default TeachersMenuItem
