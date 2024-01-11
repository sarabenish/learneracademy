import pre from "../preschool.jpg";
import junior from "../juniorschool.jpg";
import senior from "../seniorschool.jpg";

function Academics() {
  return (
    <>
      <h2 className="text-center">Academics</h2>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pre} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={junior} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={senior} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Academics;
