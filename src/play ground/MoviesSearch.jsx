import { useState } from "react";
import { WatchItem } from "../components/WatchItem";
import movies from "../data/movies.json";

export const MoviesSearch = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredMovies(filtered);
  };
  return (
    <>
      <h1>Pretraživanje filmova</h1>
      <input type="text" placeholder="Upiši film..." onChange={handleChange} />
      <hr />
      <br />
      {filteredMovies.map((movie) => {
        return <WatchItem movieObject={movie} />;
      })}
      <hr />
    </>
  );
};
