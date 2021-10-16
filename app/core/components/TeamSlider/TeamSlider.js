import React, { useMemo } from "react"
import Swiper from "react-id-swiper"
import TeamSliderItem from "./TeamSliderItem"
import { useSelector, useDispatch } from "react-redux"
import { teachersSelector } from "../../redux/slices/teachers.slice"
import { fetchTeachers } from "../../redux/slices/teachers.slice"
import { useEffect } from "react"
import "./style.scss"

export default function Team() {
  const [swiperRef, setSwiperRef] = React.useState(null)
  const [pagination, setPagination] = React.useState({
    current: 0,
    total: 0,
  })
  const dispatch = useDispatch()
  const teachers = useSelector((state) => teachersSelector.selectAll(state.teachers))

  const swiperParams = useMemo(
    () => ({
      getSwiper: setSwiperRef,
      spaceBetween: 10,
      shouldSwiperUpdate: false,
      rebuildOnUpdate: false,
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          setPagination({ current, total })
        },
      },
      zoom: true,
      slidesPerView: 2,
      preloadImages: false,
      lazy: true,
      loop: true,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      },
    }),
    []
  )

  const handlePrev = () => {
    if (swiperRef) {
      swiperRef.slidePrev()
    }
  }
  const handleNext = () => {
    if (swiperRef) {
      swiperRef.slideNext()
    }
  }

  useEffect(() => {
    dispatch(fetchTeachers())
  }, [dispatch])

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
          {teachers.length > 0 && (
            <Swiper {...swiperParams}>
              {teachers.map((item) => (
                <div key={item.id} className="swiper-slide">
                  <TeamSliderItem data={item} />
                </div>
              ))}
            </Swiper>
          )}
          <div className="slider__controls">
            <div
              onClick={handlePrev}
              className="slider__prev jsDefaultSliderPrev slider__control-element"
              data-id={621899125}
            />
            <div className="slider__counter">
              <span className="slider__counter-current jsCounterCurrent">{pagination.current}</span>
              /<span className="jsCounterTotal">{pagination.total}</span>
            </div>
            <div
              className="slider__pagination jsDefaultSliderPagination swiper-pagination-clickable swiper-pagination-bullets"
              style={{ opacity: 0 }}
              data-id={542384846}
            >
              <span className="swiper-pagination-bullet" />
              <span className="swiper-pagination-bullet" />
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
            </div>
            <div
              onClick={handleNext}
              className="slider__next jsDefaultSliderNext slider__control-element"
              data-id={886250134}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
