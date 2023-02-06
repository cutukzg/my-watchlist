export const Student = (props) => {
  const test = props.passed.join(", ");

  return (
    <>
      <div>Ime i prezime: {props.fullName}</div>
      <div>Prosjek: {props.average}</div>
      <div>Položeni kolegiji: {test}</div>
      <div>JMBAG: {props.jmbag}</div>
    </>
  );
};
