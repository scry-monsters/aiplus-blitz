import React from "react"
import { Link, Image } from "blitz"
import { Teacher } from "db"
import styles from "./detailsPageStyles"

interface Props {
  data: Teacher
}

function TeacherInfo({ data }: Props) {
  return (
    <div className="person">
      <div className="person__header">
        <div className="person__info">
          <p>{data.subtitleRu}</p>
          <div className="person__words">“{data.sloganRu}”</div>
        </div>
        <div className="person__img">
          <Image width={385} height={385} src={data.image2} alt="" />
        </div>
      </div>
      <div className="person__body">
        <div className="person__about" dangerouslySetInnerHTML={{ __html: data.textRu }} />
        <div className="text-center">
          <Link href="https://aiplus.kz/ru/teachers">
            <a className="slider__more">Посмотреть всех</a>
          </Link>
        </div>
      </div>
      <style jsx global>
        {styles}
      </style>
    </div>
  )
}

export default TeacherInfo
