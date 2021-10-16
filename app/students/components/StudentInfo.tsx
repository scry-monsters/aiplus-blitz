import React from "react"
import { Link } from "blitz"
import { Student } from "db"

interface Props {
  data: Student & {
    program: {
      id: number
      titleRu: string
      titleKz: string
      shortSchoolNameRu: string | null
      shortSchoolNameKz: string | null
    }
  }
}

function StudentInfo({ data }: Props) {
  return (
    <div className="person">
      <div className="person__header">
        <div className="person__info">
          <div className="person__title">
            до {data.beforeBallCount} баллов после {data.afterBallCount} баллов
          </div>
          <div className="person__subtitle"></div>
          <Link href="/">
            <a className="button -default person__button">Подготовка в {"НИШ"}</a>
          </Link>
        </div>
        <div className="person__img">
          <img src={data.image || ""} alt="" />
        </div>
      </div>
      <div className="person__body">
        <div className="person__about">
          <h2 dangerouslySetInnerHTML={{ __html: data.descriptionRu }} />
          <hr />
          <br />
          <div dangerouslySetInnerHTML={{ __html: data.feedbackRu }} />
          <br />
          <hr />
          <br />
          <img src="https://aiplus.kz/static/img/general/logo.png" alt="logo" width="105" />
          <br />
        </div>
        <div className="text-center">
          <Link href="/students">
            <a className="slider__more">Посмотреть все</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StudentInfo
