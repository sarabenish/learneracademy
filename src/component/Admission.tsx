import school from "../assets/school.jpg";

function Admission() {
  return (
    <>
      <div className="card">
        <img
          src={school}
          className="card-img-top opacity-25"
          alt="..."
          style={{ height: "90vh" }}
        />
        <div
          className="card-img-overlay d-flex align-items-center"
          style={{ marginLeft: "50%" }}
        >
          <button> Apply Now </button>
        </div>
      </div>
    </>
  );
}

export default Admission;
