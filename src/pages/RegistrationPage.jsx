import React from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="form">
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex pt-4">
          <label>
            <input
              required=""
              placeholder="First Name"
              type="text"
              className="input"
            />
          </label>

          <label>
            <input
              required=""
              placeholder="Last Name"
              type="text"
              className="input"
            />
          </label>
        </div>
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
          Already have an acount ?
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationPage;
