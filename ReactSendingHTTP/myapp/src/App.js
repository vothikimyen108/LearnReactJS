import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  //đùn fetch để gọi api
  //hàm bất động bộ thực chạy song song
  async function fetchHanderMove() {
    setLoading("true");
    //  fetch('https://swapi.dev/api/films/')
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       const transformedMovies = data.results.map((movieData) => {
    //         return {
    //           id: movieData.episode_id,
    //           title: movieData.title,
    //           openingText: movieData.opening_crawl,
    //           releaseDate: movieData.release_date,
    //         };
    //       });
    //       setMovies(transformedMovies);
    //     });
    const reponse = await fetch("https://swapi.dev/api/films/");
    const data = await reponse.json();
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
    setLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchHanderMove}>Fetch Movies</button>
      </section>
      <section>
        {!loading && movies.length > 0 && <MoviesList movies={movies} />}
        {!loading && movies.length === 0 && <p>Not found</p>}
        {loading && <p>loading</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
