import { memo } from "react"
import { Image, useInfiniteQuery } from "blitz"
import honor2 from "app/core/assets/images/general/honor-2.png"
import getStudents from "app/students/queries/getStudents"
import StudentsCarousel from "./StudentsCarousel"
import styles from "./style"

const ITEMS_PER_PAGE = 10

function StudentsSection() {
  const [results, { isFetching, isFetchingNextPage, fetchNextPage, hasNextPage }] =
    useInfiniteQuery(getStudents, (page = { take: ITEMS_PER_PAGE, skip: 0 }) => page, {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    })
  const students = results ? results.map(({ students }) => students).flat() : []
  const count = (results && results.at(-1)?.count) || 0

  return (
    <section className="bg-orange-gradient py-5">
      <div className="container">
        <div className="section-heading">
          <div className="section-heading__img">
            <Image width={120} height={142} src={honor2} alt="Honor 2" />
          </div>
          <div className="section-heading__content">
            <a href="https://aiplus.kz/ru/students">
              <div className="section-heading__title">Наша гордость</div>
            </a>
            <div className="section-heading__subtitle color-white">
              Ученики поступившие в НИШ и РФМШ 2017-19 года
            </div>
          </div>
        </div>
        <div className="slider -light position-relative">
          {/*//? Slider must be here! */}
          {students && (
            <StudentsCarousel count={count} students={students} fetchNextPage={fetchNextPage} />
          )}
          <div className="text-center">
            <a href="https://aiplus.kz/ru/students" className="slider__more">
              Посмотреть всех
            </a>
          </div>
        </div>
      </div>
      <style jsx global>
        {styles}
      </style>
    </section>
  )
}

export default memo(StudentsSection)
