import "./App.css";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

function App() {
  const [watchlist, setWatchList] = useState([]);

  function handleWatchList(movieObj) {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  }

  function handleCross(movieObj) {
    let filteredList = watchlist.filter((movie) => movie.id !== movieObj.id);
    localStorage.setItem("moviesApp", JSON.stringify(filteredList));
    setWatchList(filteredList);
  }

  useEffect(() => {
    let moviesFLS = localStorage.getItem("moviesApp");
    if (moviesFLS) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWatchList(JSON.parse(moviesFLS));
    }
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies
                handleWatchList={handleWatchList}
                handleCross={handleCross}
                watchlist={watchlist}
              />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={
            <Watchlist watchlist={watchlist} handleCross={handleCross} setWatchList={setWatchList} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
