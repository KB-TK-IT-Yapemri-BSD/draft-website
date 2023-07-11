"use client"

import React from "react"

import YouTubePlayer from "./YoutubePlayer"

function VideoProfil() {
  const videoId = "kvlsOvmgavQ" // Replace with the actual YouTube video ID

  return (
    <div className="bg-white">
      <div className="justify-center py-10 lg:flex-row lg:mx-40 lg:py-20">
        <div className="flex flex-col lg:flex-row text-center my-6">
          <div className="flex flex-col w-1/2 text-center mx-auto my-auto">
            <h1 className="text-4xl font-medium">Video Profil</h1>
            <h2 className="text-3xl py-3">KB TK IT Yapemri BSD</h2>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-flex w-3/4 lg:w-full mx-auto py-4 lg:py-0 overflow-x-scroll lg:overflow-hidden">
              <YouTubePlayer videoId={videoId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoProfil
