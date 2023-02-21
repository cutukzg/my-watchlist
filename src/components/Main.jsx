import { WatchItem } from "./WatchItem";
import movies from "../data/movies.json";

export const Main = () => {
  const showMovieRating = (moviName, rating) => {
    alert(`Movie ${moviName} rating is ${rating} `);
  };
  return (
    <>
      {movies.map((movie) => {
        return (
          <WatchItem
            movieObject={movie}
            key={movie.id}
            rating={showMovieRating}
          />
        );
      })}{" "}
      <hr />
    </>
  );
};
