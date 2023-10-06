"use client"

import Background from "../layout/ui/Background"
import Wrapper from "../layout/ui/Wrapper"
import YouTubePlayer from "./YoutubePlayer"

function VideoProfil() {
    const videoId = "kvlsOvmgavQ"

    return (
        <Background color="bg-white">
            <Wrapper>
                <div className="flex flex-col lg:flex-row text-center my-6">
                    <div
                        id="wrapper-left"
                        className="flex flex-col w-1/2 text-center mx-auto my-auto"
                    >
                        <h1 className="text-4xl font-medium">Video Profil</h1>
                        <h2 className="text-3xl py-3">KB TK IT Yapemri BSD</h2>
                    </div>

                    <div id="wrapper-right" className="lg:w-1/2">
                        <div
                            id="player-wrapper"
                            className="inline-flex w-3/4 lg:w-full mx-auto py-4 lg:py-0 overflow-x-scroll lg:overflow-hidden"
                        >
                            <YouTubePlayer videoId={videoId} />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Background>
    )
}

export default VideoProfil
