import cover from "../assets/cover.jpg";
import Event from "./Event";
import "../App.css";
import Academics from "./Academics";
import Admission from "./Admission";
import About from "./About";
import Alumni from "./Alumni";

function Home() {
  return (
    <>
      <div className="body">
        <img className="d-block w-100 overlay" src={cover} alt="logo" />
        <p className="carousel-caption heading">Welcome!</p>

        <About></About>
        <Admission></Admission>
        <Event></Event>
        <Alumni></Alumni>
      </div>
    </>
  );
}

export default Home;
