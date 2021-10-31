import CameraIcon from "app/core/components/Reviews/CameraIcon"
import useLocalizedProp from "app/core/hooks/useLocalizedProp"
import { Link } from "blitz"
import { Program } from "db"
import { FC } from "react"

interface Props {
  program: Program
}

const ProgramsListItem: FC<Props> = ({ program }) => {
  const l = useLocalizedProp()
  return (
    <li className="teachers-list__item">
      <Link href={`/teachers/${program.id}`}>
        <img src={program.logoAtListOfPrograms || ""} alt="" className="teachers-list__img" />
      </Link>
      <div className="teachers-list__content">
        <div className="teachers-list__name">{l(program, "title")} </div>
        {/* <div className="teachers-list__job">{program.subTitleRu}</div> */}
        {/* <div className="teachers-list__text">“{program.sloganRu}”</div> */}
      </div>
      <div className="teachers-list__links">
        <Link href={`/programs/${program.id}`}>
          <a className="button teachers-list__link">Подробно</a>
        </Link>
        <Link href={`/programs/${program.id}`}>
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

export default ProgramsListItem
