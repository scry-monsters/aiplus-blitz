import React, { memo } from "react"
import { useQuery } from "blitz"
import CameraIcon from "./CameraIcon"
import Picture from "./Picture"
import TestimonialsItem from "./ReviewsItem"
import styles from "./style"
import getDataFromPlaylist from "app/youtube/queries/getDataFromPlaylist"

interface LinkItem {
  id: number
  link: string
}

const Testimonials = () => {
  const links: LinkItem[] = [
    { id: 1, link: "https://www.youtube.com/embed/rbX6Nh73Imo" },
    { id: 2, link: "https://www.youtube.com/embed/yz1-XjGfgbo" },
    { id: 3, link: "https://www.youtube.com/embed/6oASfcREL1A" },
    { id: 4, link: "https://www.youtube.com/embed/68i3b7d8ANA" },
    { id: 5, link: "https://www.youtube.com/embed/STjWok0fZEE" },
    { id: 6, link: "https://www.youtube.com/embed/wJnq4sCnxJE" },
  ]

  return (
    <div className="testimons">
      <div className="container">
        <div className="testimons-video__container">
          <h1>ОТЗЫВЫ</h1>
          <div className="testimons__videos">
            {/* //TODO  */}
            {/* {links.map(link => (
              <TestimonialsItem link={link} key={link.id} />
            ))} */}
          </div>
        </div>
      </div>
      <div className="testimons__btns">
        <div className="testimons__btn">
          <CameraIcon />
          ВCЕ ВИДЕО ОТЗЫВЫ
        </div>
        <div className="testimons__btn">
          <Picture />
          ВCЕ ФОТО ОТЗЫВЫ
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default memo(Testimonials)
