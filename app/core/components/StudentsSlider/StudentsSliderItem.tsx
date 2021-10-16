import React from "react"
import { Link, Image } from "blitz"

const BASE_URL = "https://aiplus.kz"

function StudentsSliderItem({ data }) {
  return (
    <div>
      <div className="slider__item -students">
        <div className="slider__img">
          <Link href={data.link}>
            <a>
              <Image width={190} height={190} src={BASE_URL + data.img} alt={data.name} />
            </a>
          </Link>
        </div>
        <div className="slider__result">{data.result}</div>
        <div className="slider__text">{data.text}</div>
        <div className="slider__title color-white">{data.name}</div>
        <div className="slider__buttons">
          <Link href={data.link}>
            <a className="button slider__button">Подробно</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(StudentsSliderItem)
// let a = {}
// export default a
