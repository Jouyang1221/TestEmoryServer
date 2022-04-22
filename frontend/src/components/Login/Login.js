import React, { useContext, useRef, Component, useState } from "react";
import Image from "react-bootstrap/Image";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
// import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const { isFetching, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  // const email = useRef();
  // const password = useRef();
  const [password, setePassword] = useState("");

  const handleSubmit = (e) => {
    console.log(email);
    e.preventDefault();
    loginCall({ email: email, password: password }, dispatch);
  };

  return (
    <div className="login-wrapper">
      <div className="row login-background d-flex align-items-center">
        <div className="logo-wrapper">
          <img
            src="https://coursera-university-assets.s3.amazonaws.com/f8/5c185343dfb525fda5abae3e7216df/emory_square_coursera.png"
            className="rounded"
            alt="..."
            style={{ maxWidth: "5rem" }}
          />
          <h1>Emory Exchange</h1>
        </div>

        <div className="fbody">
          <form id="Login" onSubmit={handleSubmit}>
            {/*<h1 className="login-wrapper">Logo</h1>*/}
            <h4 className = "m-1">
              <i className="fas fa-user m-2"></i>Emory Email
            </h4>
            <input
              className=""
              type="email"
              // pattern=".+emory\.edu"
              size="25"
              placeholder="Enter your Emory Email"
              // ref={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <h4 className="m-2">
              <i class="fa-solid fa-lock m-2"></i>Password
            </h4>
            <input
              className="mb-2"
              type="password"
              size="25"
              placeholder="Enter your password"
              // ref={password}
              onChange={(e) => setePassword(e.target.value)}
            ></input>
            <br></br>
            <Link className="m-2" to="/login/forgotPassword">
              Forgot Password?
            </Link>
            <br></br>
            <div className="m-2">
              <button
                className="btn btn-primary btn-lg  m-2"
                type="submit"
                form="Login"
                disabled={isFetching}
              >
                Login
                {/* {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Log In"
                )} */}
              </button>
            </div>
            <p className="separator">or</p>
            <div className="mid">
              <LinkContainer to="/signup">
                <button className="btn btn-primary btn-lg  m-2">
                  Sign Up
                </button>
              </LinkContainer>
            </div>
          </form>
        </div>
      </div>
      </div>
  );
};

export default Login;
