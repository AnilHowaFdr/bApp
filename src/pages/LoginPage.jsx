import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="form">
        <p className="title pb-5">Log In</p>

        <label>
          <input
            required=""
            placeholder="Email"
            type="email"
            className="input"
          />
        </label>

        <label>
          <input
            required=""
            placeholder="Password"
            type="password"
            className="input mb-4"
          />
        </label>

        <button className="submit">Submit</button>
        <p className="signin">
          Now Here?
          <Link className="link pl-1" to="/registration">
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
