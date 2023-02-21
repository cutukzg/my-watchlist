import { WatchItem } from "./WatchItem";
import "../styles/landing.scss"
import { useContext, useState, useEffect } from "react";
import { NotificationContext } from "../App";

export const Landing = () => {
  const [localMovies, setLocalMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);


  const { setNotification } = useContext(NotificationContext);
  useEffect(() => {
    setNotification(false);
  })
  return (

    <div className="wrap">
      {localMovies.map((movie) => {
        return (
          <WatchItem
            movieObject={movie}
            key={movie.id}
            type="landing"
            setLocalMovies={setLocalMovies}
          />
        );
      })}
    </div>

  );
};
