import logo from "./assets/logo.png";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Academics from "./component/Academics";
import Admission from "./component/Admission";
import Account from "./component/Account";
import Quiz from "./component/Quiz";
import Event from "./component/Event";
import { Route, Routes } from "react-router-dom";
import Hiring from "./component/Hiring";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">
          <img src={logo} className="App-logo m-1" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Navbar></Navbar>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Academics" element={<Academics />} />
        <Route path="/Admission" element={<Admission />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Hiring" element={<Hiring />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
