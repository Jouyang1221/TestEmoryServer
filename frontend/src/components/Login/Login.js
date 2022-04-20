import React, { useContext, useRef, Component } from "react";
import Image from "react-bootstrap/Image";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    console.log(email);
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  return (
    <div className="login-wrapper">
      <div className="row rounded login-background d-flex align-items-center">
        <div className="col-sm-7  ">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e0c920b-a803-4ac2-8677-0de46a185c65/d3rbyn0-7856baa9-a0fe-4f8d-82a2-4aeab9075941.jpg/v1/fill/w_900,h_1350,q_75,strp/emory_iphone_background_by_oc2011_d3rbyn0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MCIsInBhdGgiOiJcL2ZcLzVlMGM5MjBiLWE4MDMtNGFjMi04Njc3LTBkZTQ2YTE4NWM2NVwvZDNyYnluMC03ODU2YmFhOS1hMGZlLTRmOGQtODJhMi00YWVhYjkwNzU5NDEuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CCBq7VbOBWOyRmxiD8aGEu9XVx_ZslJk7K01uh78HK0"
            className="rounded"
            alt="..."
            style={{ maxWidth: "21.9rem" }}
          />
        </div>

        <div className="col-sm-5">
          <form id="Login" onSubmit={handleSubmit}>
            <h1 className="login-wrapper">Logo</h1>
            <h4 className="m-1">
              <i className="fas fa-user m-2"></i>Emory Email
            </h4>
            <input
              className="m-2"
              type="email"
              pattern=".+emory\.edu"
              size="25"
              placeholder="Enter your Emory Email"
              ref={email}
            ></input>
            <h4 className="m-2">
              <i class="fa-solid fa-lock m-2"></i>Password
            </h4>
            <input
              className="m-2"
              type="password"
              size="25"
              placeholder="Enter your password"
              ref={password}
            ></input>
            <br></br>
            <Link className="m-2" to="/login/forgotPassword">
              Forgot Password?
            </Link>
            <br></br>
            <div className="login-wrapper m-2">
              <button
                className="login-wrapper btn btn-primary btn-lg  m-2"
                type="submit"
                form="Login"
                disabled={isFetching}
              >
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Log In"
                )}
              </button>
            </div>
            <p className="separator">or</p>
            <div className="login-wrapper">
              <LinkContainer to="/signup">
                <button className="btn btn-primary btn-lg login-wrapper m-2">
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
