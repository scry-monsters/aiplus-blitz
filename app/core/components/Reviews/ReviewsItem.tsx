import { memo } from "react"

interface Props {
  link: {
    id: number
    link: string
  }
}

const TestimonialsItem = ({ link }: Props) => {
  return (
    <iframe
      className="testimons__video"
      width="320px"
      height="181px"
      src={link.link}
      title="YouTube video player"
      frameBorder="100px"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  )
}

export default memo(TestimonialsItem)
