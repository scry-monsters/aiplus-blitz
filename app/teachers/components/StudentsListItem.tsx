import CameraIcon from "app/core/components/Reviews/CameraIcon"
import { Link } from "blitz"
import { Student } from "db"
import { FC } from "react"

interface Props {
  student: Student & {
    program: {
      id: number
      titleRu: string
      titleKz: string
      shortSchoolNameRu: string | null
      shortSchoolNameKz: string | null
    }
  }
}

const StudentsListItem: FC<Props> = ({ student }) => {
  return (
    <li className="students-list__item shadow">
      <Link href={`/students/${student.id}`}>
        <img src={student.image || ""} className="students-list__img" alt="" />
      </Link>
      <div className="students-list__content">
        <div className="students-list__results">
          ДО {student.beforeBallCount} БАЛЛОВ ПОСЛЕ {student.afterBallCount} БАЛЛОВ
        </div>
        <div className="students-list__title">
          Поступил в {student.program.shortSchoolNameRu} в {student.year.getFullYear()}
        </div>
        <div className="students-list__name">{student.fioRu}</div>
        <div className="students-list__links">
          <Link href={`/programs/${student.program.id}`}>
            <a className="button students-list__link">{student.program.titleRu}</a>
          </Link>
          <Link href={`/students/${student.id}`}>
            <a className="button students-list__link">Подробно</a>
          </Link>
          <Link href="/">
            <a className="button students-list__link jsBmButton fa1">
              <CameraIcon className="fa" />
            </a>
          </Link>
        </div>
      </div>
    </li>
  )
}

export default StudentsListItem
