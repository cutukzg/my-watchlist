import axios from "axios";
import { useState } from "react";
import { WatchItem } from "./WatchItem";
import loader from '../img/loader.svg';
import "../styles/search.scss"

export const Search = () => {
  const endpoint = 'https://www.omdbapi.com/?apikey=6fe1e02';
  const [inputSubmit, setInputSubmit] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [localMovies, setLocalMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);


  const searchMoviesSubmit = (e) => {
    e.preventDefault();
    console.log(inputSubmit);

    console.log('pokreni loader');
    setIsLoading(true);
    fetchMovies();

  };

  const fetchMovies = async () => {
    const response = await axios.get(`${endpoint}&s=${inputSubmit}`)
    const searchResults = response.data.Search || []
    setSearchResults(searchResults.map((movie) => {
      const helperObject = {
        imagePath: movie.Poster,
        title: movie.Title,
        id: movie.imdbID,
        added: localMovies.find(localMovie => localMovie.id === movie.imdbID) !== undefined

      }

      return helperObject


    }))

    console.log('zaustavi loader');
    setIsLoading(false);
  }

  return (


    <div className="search-div">

      <div>
        <form onSubmit={searchMoviesSubmit}>
          <input type="text" onChange={(e) => setInputSubmit(e.target.value)} value={inputSubmit} />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="search-body">

        {isLoading && <img src={loader} alt="loader" />}


        {searchResults.map((movie) => {

          return (
            <WatchItem
              key={movie.id}
              movieObject={movie}
              type={"search"}
              added={movie.added}
              setLocalMovies={setLocalMovies}

            />
          );
        })}
      </div>
    </div>

  );
};

//http://www.omdbapi.com/?apikey=6fe1e02
