import React from "react";

function MovieCard({
  title,
  poster,
  movieObj,
  handleWatchList,
  handleCross,
  watchlist,
}) {

  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="w-40 cursor-pointer">
      
      {/* Poster */}
      <div
        className="
          relative
          h-60 rounded-xl overflow-hidden
          bg-center bg-no-repeat bg-black
          shadow-md
          transition-all duration-300
          hover:scale-105
          hover:shadow-xl
        "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster})`,
          backgroundSize: "contain",
        }}
      >
        {doesContain(movieObj) ? (
          // Remove from watchlist
          <div
            className="
              absolute top-2 right-2
              h-6 w-6
              flex items-center justify-center
              rounded-full
              bg-black/60
              text-red-400 text-sm
              cursor-pointer
              hover:scale-110
              transition
            "
            onClick={() => handleCross(movieObj)}
          >
            &#10060;
          </div>
        ) : (
          // Add to watchlist
          <div
            className="
              absolute top-2 right-2
              h-6 w-6
              flex items-center justify-center
              rounded-full
              bg-black/60
              text-yellow-400 text-sm
              cursor-pointer
              hover:scale-110
              transition
            "
            onClick={() => handleWatchList(movieObj)}
          >
            &#128278;
          </div>
        )}
      </div>

      {/* Title */}
      <p
        className="
          mt-2 text-sm font-semibold text-gray-800
          text-center truncate
          transition-colors duration-300
          hover:text-blue-600
        "
      >
        {title}
      </p>
    </div>
  );
}

export default MovieCard;
