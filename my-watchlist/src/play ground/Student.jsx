import propTypes from "prop-types";
import movies from "../data/movies.json";
import propType from "prop-types";

export const Student = (props) => {
  const test = props.passed.join(", ");

  return (
    <>
      <div>Ime i prezime: {props.fullName}</div>
      <div>Prosjek: {props.average}</div>
      <div>Položeni kolegiji: {test}</div>
      <div>JMBAG: {props.jmbag}</div>
      <button onClick={() => props.introStudent(props.fullName)}>
        Intro Student
      </button>
    </>
  );
};

Student.propType = {
  fullName: propTypes.string,
  average: propTypes.number,
  passed: propTypes.arrayOf(propTypes.string),
  jmbag: propTypes.number,
};
