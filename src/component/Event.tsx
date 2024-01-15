import card from "../assets/card.png";

function Event() {
  return (
    <>
      <div className="container event">
        <h2 className="text-center m-5">Events</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={card} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={card} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={card} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={card} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
