"use client"
import { useState, useRef } from "react"

const musicList = [
  {
    name: "Joji - Gimme Love",
    file: "/music/gimme-love.mp3",
  },
  {
    name: "Arctic Monkeys - 505",
    file: "/music/505.mp3",
  },
  {
    name: "The Neighbourhood - Reflections",
    file: "/music/reflections.mp3",
  },
  {
    name: "The Smiths - Back to the Old House",
    file: "/music/back-to-the-old-house.mp3",
  },
  {
    name: "George Harrison - My Sweet Lord",
    file: "/music/my-sweet-lord.mp3",
  },
  {
    name: "Daniel Caesar - Loose",
    file: "/music/loose.mp3",
  },
  {
    name: "Frank Ocean - End",
    file: "/music/end.mp3",
  },
  {
    name: "Daniel Caesar - Toronto 2014",
    file: "/music/toronto-2014.mp3",
  },
  {
    name: "The Smiths - Please, Please, Please",
    file: "/music/please,please,please.mp3",
  },
  {
    name: "Bob Dylan - Knockin' on Heaven's Door",
    file: "/music/knockin-on-heavens-door.mp3",
  }
]

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0)
  const audioRef = useRef(null)

  const playNext = () => {
    setCurrentTrack((currentTrack + 1) % musicList.length)
  }

  const playPrevious = () => {
    setCurrentTrack((currentTrack - 1 + musicList.length) % musicList.length)
  }

  const handleEnded = () => {
    playNext()
  }

  return (
    <div className="bg-black bg-opacity-70 text-white p-4 rounded-xl shadow-xl max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-2">🎶 Music Player</h2>
      <p className="mb-2">{musicList[currentTrack].name}</p>
      <audio
        ref={audioRef}
        src={musicList[currentTrack].file}
        controls
        autoPlay
        onEnded={handleEnded}
        className="w-full mb-4"
      />
      <div className="flex justify-between">
        <button
          onClick={playPrevious}
          className="bg-white text-black px-3 py-1 rounded hover:bg-gray-300 transition"
        >
          ⏮ Prev
        </button>
        <button
          onClick={playNext}
          className="bg-white text-black px-3 py-1 rounded hover:bg-gray-300 transition"
        >
          ⏭ Next
        </button>
      </div>
    </div>
  )
}
