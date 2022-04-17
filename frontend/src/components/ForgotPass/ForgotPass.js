import Reactm, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./ForgotPass.css";
//handleSubmit = () => {};
class ForgotPass extends Component {
  render() {
    return (
      <div className="forgot_wrapper ">
        <div className="row rounded forgot-background d-flex justify-content-center align-items-center">
          <div className="col-sm-7  ">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e0c920b-a803-4ac2-8677-0de46a185c65/d3rbyn0-7856baa9-a0fe-4f8d-82a2-4aeab9075941.jpg/v1/fill/w_900,h_1350,q_75,strp/emory_iphone_background_by_oc2011_d3rbyn0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MCIsInBhdGgiOiJcL2ZcLzVlMGM5MjBiLWE4MDMtNGFjMi04Njc3LTBkZTQ2YTE4NWM2NVwvZDNyYnluMC03ODU2YmFhOS1hMGZlLTRmOGQtODJhMi00YWVhYjkwNzU5NDEuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CCBq7VbOBWOyRmxiD8aGEu9XVx_ZslJk7K01uh78HK0"
              className="rounded"
              alt="..."
              style={{ maxWidth: "21.9rem" }}
            />
          </div>

          <div className="col-sm-5">
            <form className="" ref="form" onSubmit={this.handleSubmit}>
              <h1 className="forgot-wrapper">Logo</h1>
              <h4 className="m-1">
                <i className="fas fa-user m-2"></i>Emory Email
              </h4>
              <input
                className="m-2"
                type="email"
                pattern=".+emory\.edu"
                size="25"
                placeholder="Enter your Emory Email"
              ></input>

              <br></br>
              <div className="forgot-wrapper m-2">
                <button
                  className="forgot-wrapper btn btn-primary btn-lg  m-2"
                  type="submit"
                >
                  Reset My Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPass;
