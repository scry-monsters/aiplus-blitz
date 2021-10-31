import { memo } from "react"
import { useQuery } from "blitz"
import TeamsCarousel from "./TeamsCarousel"
import styles from "./style"
import getTeachers from "app/teachers/queries/getTeachers"

const ITEMS_PER_PAGE = 10

function TeamsSection() {
  const [{ teachers, count }] = useQuery(getTeachers, { skip: 0 })

  return (
    <section className="py-5">
      <div className="container">
        <div className="section-heading d-block">
          <div className="section-heading__title">ТРЕНЕРЫ</div>
          <div className="section-heading__subtitle">
            Наши тренеры квалифицированные специалисты с опытом подготовки в ТОП школы
          </div>
        </div>
        <div className="position-relative">
          {teachers && <TeamsCarousel count={count} teachers={teachers} />}
        </div>
      </div>
      <style jsx global>
        {styles}
      </style>
    </section>
  )
}

export default memo(TeamsSection)
