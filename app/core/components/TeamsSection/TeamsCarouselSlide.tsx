import React, { useState, useCallback } from "react"
import { Image, Link } from "blitz"
import { Teacher } from "db"

interface Props {
  data: Teacher
}

export const Slide = ({ data }: Props) => {
  const [hasLoaded, setHasLoaded] = useState(false)

  const setLoaded = useCallback(() => {
    setHasLoaded(true)
  }, [setHasLoaded])

  return (
    <div className={`embla__slide ${hasLoaded ? "has-loaded" : ""}`}>
      <div className="embla__slide__inner">
        <div className="slider__item teacher-slider-item">
          <div className="slider__img">
            <Link href={`/teachers/${data.id}`}>
              <a>
                <Image
                  className="embla__slide__img"
                  src={data.image2 || ""}
                  placeholder="empty"
                  onLoad={setLoaded}
                  alt="student"
                  width={200}
                  height={200}
                />
              </a>
            </Link>
          </div>
          <div className="slider__title">{data.fioRu}</div>
          <div className="slider__text">{data.subtitleRu}</div>
          <div className="slider__buttons">
            <Link href={`/teachers/${data.id}`}>
              <a className="button slider__button">Подробно</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
