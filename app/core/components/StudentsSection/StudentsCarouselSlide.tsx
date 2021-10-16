import React, { useState, useCallback } from "react"
import { Image, Link } from "blitz"
import { Student } from "db"

interface Props {
  data: Student
}

export const Slide = ({ data }: Props) => {
  const [hasLoaded, setHasLoaded] = useState(false)

  const setLoaded = useCallback(() => {
    setHasLoaded(true)
  }, [setHasLoaded])

  return (
    <div className={`embla__slide ${hasLoaded ? "has-loaded" : ""}`}>
      <div className="embla__slide__inner">
        <div className="slider__item -students">
          <div className="slider__img">
            <Link href={`/students/${data.id}`}>
              <a>
                <Image
                  className="embla__slide__img"
                  src={data.image || ""}
                  placeholder="empty"
                  onLoad={setLoaded}
                  alt="student"
                  width={200}
                  height={200}
                />
              </a>
            </Link>
          </div>
          <div className="slider__result">
            до {data.beforeBallCount}
            <br />
            после {data.afterBallCount}
          </div>
          <div
            className="slider__text"
            dangerouslySetInnerHTML={{ __html: data.sliderSubtitleRu }}
          ></div>
          <div className="slider__title color-white">{data.fioRu}</div>
          <div className="slider__buttons">
            <Link href={`/students/${data.id}`}>
              <a className="button slider__button">Подробно</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
