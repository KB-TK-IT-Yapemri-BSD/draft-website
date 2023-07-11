import React from "react"
import YouTube from "react-youtube"

const YouTubePlayer = ({ videoId }: any) => {
  const opts = {
    playerVars: {
      // Add any additional player vars here if needed
    },
  }

  return (
    <div className="w-screen lg:w-full lg:mx-auto">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  )
}

export default YouTubePlayer
