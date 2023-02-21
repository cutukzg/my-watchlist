import propTypes from "prop-types";
import { useContext } from "react";
import "../styles/watch-item.scss";
import { NotificationContext } from '../App';
import { syncLocalStorage } from '../functions/syncLocalStorage';


export const WatchItem = ({ movieObject, setLocalMovies, type }) => {
  const { notification, setNotification } = useContext(NotificationContext);

  const handleMovieAdd = () => {
    syncLocalStorage("add", movieObject);
    !notification && setNotification(true);
  }

  const handleMovieRemove = () => {
    const localMovies = syncLocalStorage("remove", movieObject);
    setLocalMovies(localMovies);
  }

  const handleMovieChange = () => {
    const localMovies = syncLocalStorage("change", movieObject);

    console.log('localMovies', localMovies);
    setLocalMovies(localMovies);
  }
  const handleMovieClick = () => {
    if (movieObject.added) {
      movieObject.added = false
      handleMovieRemove()
    } else {
      movieObject.added = true
      handleMovieAdd()

    }

  }


  const isLandingItem = type === "landing"

  const renderActionButton = () => {
    switch (type) {
      case "search":
        return <button onClick={handleMovieClick} className="button"> {movieObject.added ? "Remove movie" : "Add movie"} </button >
      case "landing":
      case "favorites":
        return <button
          onClick={handleMovieChange}
          className="favorite-button"
        >
          {movieObject.isFavorite ? "💙" : "♡"}
        </button>
      default:
        return null
    }
  }

  return (
    <div className="item-wrap">
      <article className="watch-item">
        <div
          className="img-wrap"
          style={{ backgroundImage: `url(${movieObject.imagePath})` }}
        ></div>
        <h3>{movieObject.title}</h3>
        {renderActionButton()}
        {isLandingItem && <button
          onClick={handleMovieRemove} className="button">Delete movie</button>}
      </article>
    </div>
  );
};
WatchItem.propTypes = {
  movieObject: propTypes.object,
  type: propTypes.string
};
