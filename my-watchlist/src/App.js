import logo from "./logo.svg";
import "./App.css";
import { UserImage } from "./play ground/UserImage";
import { ClassSample } from "./play ground/ClassSample";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Main />
      <hr />
      <Footer />
      <hr />
    </div>
  );
}

export default App;
