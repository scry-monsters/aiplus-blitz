import React, { useState } from "react"
import { Link } from "blitz"
import { Student } from "db"

interface Props {
  students: Student[]
  title: string
}

const StudentsMenuItem = ({ students, title }: Props) => {
  const [open, setOpen] = useState(false)

  const year = students[0]?.year ? new Date(students[0]?.year).getFullYear() : null

  const handleClick = () => {
    setOpen(!open)
  }

  const displayToggle = open ? { display: "block" } : { display: "none" }

  return (
    <div>
      <div className="menu__item">
        <span className={open ? "menu__link-onfocus" : "menu__link"} onClick={handleClick}>
          {year ? `Поступившие в ${title} в ${year} году` : `Поступившие в ${title}`}
        </span>

        {students.length !== 0 && (
          <ul className="menu__sub" style={displayToggle}>
            {students.map((item) => {
              return (
                <Link href={`/students/${item.id}`} key={item.id}>
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

export default StudentsMenuItem
