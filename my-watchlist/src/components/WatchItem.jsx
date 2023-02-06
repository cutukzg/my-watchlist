import god from "../img/god.jpg";
import propTypes from "prop-types";

export const WatchItem = ({ movieObject }) => {
  return (
    <article>
      <img src={movieObject.imagePath} alt={movieObject.title} />
      <h6>{movieObject.title}</h6>
      <button>
        {movieObject.isFavorite ? "Makni iz favorita" : "Dodaj u favorite"}
      </button>
    </article>
  );
};
WatchItem.propTypes = {
  movieObject: propTypes.object,
};
