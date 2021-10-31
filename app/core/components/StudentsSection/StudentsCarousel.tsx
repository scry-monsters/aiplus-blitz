import React, { useState, useEffect, useCallback, useMemo } from "react"
import useEmblaCarousel from "embla-carousel-react"
// import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import { Slide } from "./StudentsCarouselSlide"
import { Student } from "db"

const url = "https://cdn.filestackcontent.com/resize=width:200/WzUGkOZER060WqMh8zyk"

interface Props {
  students: Student[]
  count: number
  fetchNextPage(): void
}

const StudentsCarousel = ({ students, count = 0, fetchNextPage }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    align: "start",
  })
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    const lastSlideInView = embla.slidesInView()[embla.slidesInView().length - 1]
    if (lastSlideInView !== undefined && lastSlideInView + 1 >= students.length - 3) {
      fetchNextPage()
    }
    // setPrevBtnEnabled(embla.canScrollPrev());
    // setNextBtnEnabled(embla.canScrollNext());
    setCurrentSlide(() => {
      const a = embla.slidesInView()[embla.slidesInView().length - 1]
      return a !== undefined ? a + 1 : 0
    })
  }, [embla, fetchNextPage, students.length])

  useEffect(() => {
    if (embla && embla.slideNodes().length !== students.length) {
      embla.reInit()
    }
  }, [embla, students])

  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on("select", onSelect)
  }, [embla, onSelect])

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {students.map((item) => (
              <Slide key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="slider__controls">
        <div
          onClick={scrollPrev}
          className="slider__prev jsDefaultSliderPrev slider__control-element"
        />
        <div className="slider__counter">
          <span className="slider__counter-current jsCounterCurrent">{currentSlide}</span>/
          <span className="jsCounterTotal">{count}</span>
        </div>
        <div
          className="slider__pagination jsDefaultSliderPagination swiper-pagination-clickable swiper-pagination-bullets"
          style={{ opacity: 0 }}
        >
          <span className="swiper-pagination-bullet" />
          <span className="swiper-pagination-bullet" />
          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
        </div>
        <div
          onClick={scrollNext}
          className="slider__next jsDefaultSliderNext slider__control-element"
        />
      </div>
    </>
  )
}

export default StudentsCarousel
