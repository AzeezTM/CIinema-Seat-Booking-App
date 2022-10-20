import React, { useState } from "react";
import Login from "./Login";
import "./Signup.css";

const Signup = () => {
  let data = [];

  const [lastName, setLastName] = useState("");

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!lastName || !firstName || !email) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("LastName", JSON.stringify(lastName));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("FirstName", JSON.stringify(firstName));

      console.log("saved to local storage");
      setLogin(!login);
    }
  };

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <div className="demo-wrap">
      <div className="demo-content d-flex justify-content-center">
        {login ? (
          <form className="formi mt-5" onSubmit={handleSubmit}>
            <h2 className="text-align-center mb-4 text-black text-center">
              Sign Up{" "}
            </h2>

            <input
              type="text"
              className="form-control mb-2 "
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2 "
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="email"
              name=""
              id=""
              className="form-control mb-2"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn1 btn btn-primary mb-3 ">
                Sign Up
              </button>
            </div>

            <p
              className="showlogin text-dark text-center"
              onClick={handleClick}
            >
              Already registered {""} Log In ?
           </p>

            {flag && (
              <div className="alert alert-danger" role={"alert"}>
                please fill every box
              </div>
            )}
          </form>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};

export default Signup;
