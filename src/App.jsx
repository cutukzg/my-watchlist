import "./App.css";
import { Favorites } from "./components/Favorites";
// import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";
import { Search } from "./components/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { createContext } from 'react';

export const NotificationContext = createContext();

export const App = () => {
  const [notification, setNotification] = useState(false);
  return (
    <Router>
      <div className="App">
        <NotificationContext.Provider value={{ notification, setNotification }}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </main>
        </NotificationContext.Provider>

        {/* <hr />
        <Footer /> */}

      </div>
    </Router>
  );
};
