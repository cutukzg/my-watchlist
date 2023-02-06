import { Person } from "../play ground/Person";
import bat from "../img/batman.jpg";
import sup from "../img/superman.jpg";
import spy from "../img/spiderman.jpg";
import { Movies } from "./Movie";
import { ClassSample } from "./ClassSample";
import { Student } from "./Student";

export const Playground = () => {
  const students = [
    {
      fullName: "Ivan Horvat",
      average: 4.2,
      passed: ["matematika", "Fizika", "TZK"],
      jmbag: 64758596078,
    },
    {
      fullName: "Stipe Mesić",
      average: 2.2,
      passed: ["matematika", "Geografija", "TZK"],
      jmbag: 47585984678,
    },
    {
      fullName: "Marko Sarko",
      average: 4.1,
      passed: ["OOP", "Fizika", "TZK"],
      jmbag: 64796396078,
    },
  ];

  return (
    <>
      {students.map((student) => {
        return (
          <div key={student.jmbag}>
            <Student
              key={student.jmbag}
              fullName={student.fullName}
              average={student.average}
              passed={student.passed}
              jmbag={student.jmbag}
            />
            <br />
          </div>
        );
      })}

      <div>
        <Person
          name="Frane"
          surname="Bilić"
          bday="1.2.3456."
          address="Street 1"
          parties={["HNS", "HSLS", "HSS"]}
        />
        <hr />
        <Person
          name="Stipe"
          surname="Mesić"
          bday="1.2.0125."
          address="Street 2"
          parties={["HDZ", "SDP", "HSP", "PŠK"]}
        />
        <hr />
        <Movies name="Batman" img={bat} />
        <Movies name="Superman" img={sup} />
        <Movies name="Spiderman" img={spy} />

        <ClassSample />
        <hr />
      </div>
    </>
  );
};
