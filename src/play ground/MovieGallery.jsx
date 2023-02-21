import { useState } from "react";
import { WatchItem } from "../components/WatchItem";
import movies from "../data/movies.json";

export const MovieGallery = () => {
  const [index, setIndex] = useState(0);
  const handleIndex = (action) => {
    if (action === "increment") {
      if (movies.length > index + 1) {
        setIndex(index + 1);
      } else if (movies.length === index + 1) {
        setIndex(0);
      }
    } else if (action === "decrement") {
      if (index === 0) {
        setIndex(movies.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  };

  return (
    <>
      <WatchItem movieObject={movies[index]} />
      <div>
        <button
          onClick={() => handleIndex("decrement")}
          // disabled={index === 0}
        >
          Previous
        </button>
        <button
          onClick={() => handleIndex("increment")}
          //   disabled={index === movies.length - 1}
        >
          Next
        </button>
      </div>
    </>
  );
};
