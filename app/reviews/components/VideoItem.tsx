import React from "react"

const VideoItem = ({ link }) => {
  return (
    <iframe
      style={{ margin: "5px 5px" }}
      className="testimons__video"
      width="300px"
      height="181px"
      src={link}
      title="YouTube video player"
      frameBorder="100px"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  )
}

export default VideoItem
