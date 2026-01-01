
import React from 'react'

function Banner() {
  return (
    <div
      className="h-[25vh] md:h-[80vh] bg-cover bg-center relative flex items-end"
      style={{
        backgroundImage:
          "url(https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Movie Title */}
      <div className="relative w-full px-6 md:px-12 pb-6 md:pb-12">
        <h1 className="text-3xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Avengers
        </h1>

        <div className="w-20 h-1 bg-blue-500 mt-3 rounded-full"></div>
      </div>
    </div>
  )
}

export default Banner
