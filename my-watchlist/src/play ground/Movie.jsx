export const Movies = (props) => {
  return (
    <figure>
      <img src={props.img} alt="" />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
};
