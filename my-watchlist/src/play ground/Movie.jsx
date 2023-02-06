import propTypes from "prop-types";

export const Movies = (props) => {
  return (
    <figure>
      <img src={props.img} alt="" />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
};

Movies.propTypes = {
  name: propTypes.string,
  img: propTypes.string,
};
