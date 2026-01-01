import React, { useState } from "react";
import genreids from "../Utilities/genreids";

function Watchlist({ watchlist,setWatchList,handleCross}) {
  let [search,setSearch]=useState("")

  function handleSearch(e){
    setSearch(e.target.value)
  }
   
  function sortIncreasing() {
  let sortedIncre = [...watchlist].sort(
    (a, b) => a.vote_average - b.vote_average
  );
  setWatchList(sortedIncre);
}

function sortDecreasing() {
  let sortedDecre = [...watchlist].sort(
    (a, b) => b.vote_average - a.vote_average
  );
  setWatchList(sortedDecre);
}


  return (
    <>
      {/* Search */}
      <div className="flex justify-center my-4">
        <div className="relative w-72">
          {/* Search Icon */}
          <i
            className="fa-solid fa-magnifying-glass 
      absolute left-3 top-1/2 -translate-y-1/2 
      text-gray-500"
          ></i>

          {/* Input */}
          <input
            type="text"
            placeholder="Search a movie"
            className="
        w-full h-10 pl-10 pr-4
        bg-gray-200 rounded-md
        outline-none
        placeholder-gray-500
        focus:ring-2 focus:ring-blue-500
      "   onChange={handleSearch}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-700 text-center">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr className="border-b">
              <th className="p-3">Poster</th>
              <th className="p-3">Movie</th>
             <th className="p-3">
                <div className="flex items-center justify-center gap-2">
                  <i
                    className="fa-solid fa-arrow-up cursor-pointer"
                    onClick={sortIncreasing}
                  ></i>
                  <span>Rating</span>
                  <i
                    className="fa-solid fa-arrow-down cursor-pointer"
                    onClick={sortDecreasing}
                  ></i>
                </div>
              </th>
              <th className="p-3">Popularity</th>
              <th className="p-3">Genre</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {watchlist
    .filter((movieObj) => {
      const searchText = search.toLowerCase();

      const titleMatch = movieObj.title
        .toLowerCase()
        .includes(searchText);

      const genreMatch = movieObj.genre_ids
        .map((id) => genreids[id].toLowerCase())
        .join(" ")
        .includes(searchText);

      return titleMatch || genreMatch;
    })
    .map((movieObj) => (
              <tr
                key={movieObj.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* Poster */}
                <td className="p-3 flex justify-center">
                  <img
                    className="h-24 rounded-lg"
                    src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}
                    alt={movieObj.title}
                  />
                  
                </td>

                {/* Movie name */}
                <td className="p-3 font-semibold">{movieObj.title}</td>

                {/* Rating */}
                <td className="p-3">{movieObj.vote_average.toFixed(1)}</td>

                {/* Popularity */}
                <td className="p-3">{Math.round(movieObj.popularity)}</td>

                {/* Genre */}
                <td className="p-3">
                    {movieObj.genre_ids
                      .map((id) => genreids[id])
                      .join(", ")}
                  </td>

                {/* Delete */}
                <td
  className="p-3 text-red-600 font-semibold cursor-pointer hover:underline"
  onClick={() => handleCross(movieObj)}
>
  Delete
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
