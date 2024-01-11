import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="nav navbar-nav navbar-right">
          <Link className="nav-item nav-link active" to="/Home">
            Home
          </Link>
          <Link className="nav-item nav-link" to="/About">
            About
          </Link>
          <Link className="nav-item nav-link" to="Academics">
            Academics
          </Link>
          <Link className="nav-item nav-link disabled" to="/Admissions">
            Admissions
          </Link>
          <Link
            className="nav-item nav-link btn btn-outline-success my-2 my-sm-0"
            to="/Account"
          >
            Log In
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
