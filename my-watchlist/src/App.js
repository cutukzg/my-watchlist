import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Playground } from "./play ground/Playground";

export const App = () => {
  return (
    <div className="App">
      {/* <Header />
      <hr />
      <Main />
      <hr />
      <Footer />
      <hr /> */}
      <Playground />
    </div>
  );
};
