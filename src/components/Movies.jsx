import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import Pagination from './Pagination'

function Movies({handleWatchList,handleCross,watchlist}) {
   const [movies,setMovies]=useState([])
   const [pageNo,setPageNo]=useState(1)

   const handlePrev=()=>{
    if(pageNo==1){
      setPageNo(1)
    }
    else{
     setPageNo(pageNo-1)}
   }

   const handleNext=()=>{
     setPageNo(pageNo+1)
   }
    
   useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=eb05c477e96815c748b3a3c42ff4e977&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results)
       setPageNo(res.data.page)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [pageNo])

  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center mb-[15px]">
        Trending movies
      </div>

      <div className="grid grid-cols-7 gap-6">
        {movies.map((movieObj)=>{
            return <MovieCard movieObj={movieObj} handleWatchList={handleWatchList}
            key={movieObj.id} title={movieObj.title} poster={movieObj.poster_path} handleCross={handleCross} watchlist={watchlist}/>
        })}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  )
}

export default Movies
