import logo from "./logo.svg";
import "./App.css";
import { UserImage } from "./play ground/UserImage";
import { ClassSample } from "./play ground/ClassSample";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Person } from "./play ground/Person";
import bat from "../src/img/batman.jpg";
import sup from "../src/img/superman.jpg";
import spy from "../src/img/spiderman.jpg";
import { Movies } from "./play ground/Movie";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <hr />
      <Main />
      <hr />
      <Footer />
      <hr /> */}
      <Person
        name="Frane"
        surname="Bilić"
        bday="1.2.3456."
        address="Street 1"
        parties={["HNS", "HSLS", "HSS"]}
      />
      <Person
        name="Stipe"
        surname="Mesić"
        bday="1.2.0125."
        address="Street 2"
        parties={["HDZ", "SDP", "HSP", "PŠK"]}
      />
      <Movies name="Batman" img={bat} />
      <Movies name="Superman" img={sup} />
      <Movies name="Spiderman" img={spy} />
      {/* <UserImage/>
      <ClassSample/> */}
    </div>
  );
}

export default App;
