import { useState } from "react";
import school from "../assets/school.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Reducer";

function Account() {
  const accounts = useSelector((state: RootState) => state.account);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: any) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={school} className="card-img-top opacity-25" alt="..." />
          </div>
          <div className="col">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="exampleInputName">Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <small id="nameHelp" className="form-text text-muted">
                  We'll never share your username with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
