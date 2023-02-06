import { WatchItem } from "./WatchItem";
import movies from "../data/movies.json";

export const Main = () => {
  return (
    <>
      {movies.map((movie) => {
        return <WatchItem movieObject={movie} key={movie.id} />;
      })}{" "}
      <hr />
    </>
  );
};
