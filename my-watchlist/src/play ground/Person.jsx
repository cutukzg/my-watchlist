export const Person = (props) => {
  return (
    <>
      <div>My name is {props.name}</div>
      <div>My surname is {props.surname}</div>
      <div>BDay{props.bday}</div>
      <div>Address {props.address}</div>
      <div>
        Parties{""}
        {props.parties.map((party, index) => {
          return <div key={index}>{party}</div>;
        })}
      </div>
    </>
  );
};
