import CameraIcon from "app/core/components/Reviews/CameraIcon"
import { Link } from "blitz"
import { Teacher } from "db"
import { FC } from "react"

interface Props {
  teacher: Teacher
}

const TeachersListItem: FC<Props> = ({ teacher }) => {
  return (
    <li className="teachers-list__item">
      <Link href={`/teachers/${teacher.id}`}>
        <img src={teacher.image2 || ""} alt="" className="teachers-list__img" />
      </Link>
      <div className="teachers-list__content">
        <div className="teachers-list__name">{teacher.fioRu} </div>
        <div className="teachers-list__job">{teacher.subtitleRu}</div>
        <div className="teachers-list__text">“{teacher.sloganRu}”</div>
      </div>
      <div className="teachers-list__links">
        <Link href={`/teachers/${teacher.id}`}>
          <a className="button teachers-list__link">Подробно</a>
        </Link>
        <Link href={`/teachers/${teacher.id}`}>
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

export default TeachersListItem
