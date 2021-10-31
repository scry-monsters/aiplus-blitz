import React, { memo } from "react"
import { Link, Image } from "blitz"
// import StudentsListItem from "./StudentsListItem"
import StudentsMenuItem from "./StudentsMenuItem"
import styles from "./styles"
import { Student } from "db"

import wave1 from "app/core/assets/images/general/wave1.png"
import wave2 from "app/core/assets/images/general/wave2.png"
import glow1 from "app/core/assets/images/general/glow-1.png"

interface IStudentsMenuItem {
  Student: Student[]
  id: number
  titleRu: string
  titleKz: string
  shortSchoolNameRu: string | null
  shortSchoolNameKz: string | null
}

interface IStudentsBreadcrumbsItem {
  id: string
  link?: string
  title: string
}

interface Props {
  menuItems: IStudentsMenuItem[]
  breadcrumbs: IStudentsBreadcrumbsItem[]
  title: string
}

const StudentsPage: React.FC<Props> = ({ menuItems = [], breadcrumbs = [], title, children }) => {
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
                  <StudentsMenuItem
                    key={`${item.id}_${item?.Student?.[0]?.year}`}
                    title={item.shortSchoolNameRu || ""}
                    students={item.Student}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-8 col-lg-9">
              {/* <ul className="students-list">
                {students.map(item => {
                  return <StudentsListItem key={item.id} student={item} />
                })}
              </ul> */}
              {children}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {styles}
      </style>
    </div>
  )
}

export default StudentsPage
