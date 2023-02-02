import logo from "../logo.svg";

export const AdditionalDescription = () => {
  return (
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum consectetur,
      eligendi officiis excepturi iste dignissimos reiciendis facere! Similique
      ut dolorem temporibus ipsum, quaerat rerum, sed ex earum deserunt pariatur
      dolor.
    </p>
  );
};

export const UserImage = () => {
  return (
    <div className="img-wrap">
      <figure>
        <img src={logo} alt="" />
        <figcaption> React logo</figcaption>
      </figure>
      <AdditionalDescription />
    </div>
  );
};
