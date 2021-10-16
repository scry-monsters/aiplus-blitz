import React from "react"
import { Link } from "react-router-dom"

// const BASE_URL = "https://aiplus.kz";

function TeamSliderItem({ data }) {
  return (
    <div className="slider__item teacher-slider-item">
      <div className="slider__img">
        <Link to={`/teachers/${data.id}`}>
          <img src={data.image} alt="" />
        </Link>
      </div>
      <div className="slider__title">{data.name}</div>
      <div className="slider__text">{data.description}</div>
      <div className="slider__buttons">
        <Link to={data.link} className="button slider__button">
          Подробно
        </Link>
      </div>
    </div>
  )
}

export default TeamSliderItem
