import { Link, Image } from "blitz"
import styles from "./teachersListStyles"

import wave1 from "app/core/assets/images/general/wave1.png"
import wave2 from "app/core/assets/images/general/wave2.png"
import glow1 from "app/core/assets/images/general/glow-1.png"

interface ITeachersBreadcrumbsItem {
  id: string
  link?: string
  title: string
}

interface Props {
  breadcrumbs: ITeachersBreadcrumbsItem[]
  title: string
}

const ProgramsPage: React.FC<Props> = ({ breadcrumbs = [], title, children }) => {
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
        <div className="container">{children}</div>
      </div>
      <style jsx global>
        {styles}
      </style>
    </div>
  )
}

export default ProgramsPage
