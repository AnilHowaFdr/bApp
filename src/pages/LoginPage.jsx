import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [passShow, setPassShow] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [userErr, setUserErr] = useState({
    emailErr: "",
    passwordErr: "",
  });
  const handleSubmit = () => {
    // const regex = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;

    if (!user.email) {
      setUserErr({ ...userErr, emailErr: "Email is required!" });
    } else if (!user.password) {
      setUserErr({ ...userErr, passwordErr: "Password is required!" });
    } else {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          console.log(res.user);
          toast.success("Login successfully done");
          setTimeout(() => navigate("/"), 2000);
        })
        .catch((error) => {
          if (error.code == "auth/invalid-email") {
            setUserErr({
              ...userErr,
              emailErr: "Invalid Email!",
            });
          } else if (error.code == "auth/invalid-credential") {
            setUserErr({
              ...userErr,
              passwordErr: "Authentication failed!",
            });
          } else {
            console.log(error.code);
            console.log(error.message);
          }
        });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
      <form className="form">
        <p className="title pb-5">Log In</p>

        <label>
          <input
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
              setUserErr("");
            }}
            required=""
            placeholder="Email"
            type="email"
            className="input"
            value={user.email}
          />
          {userErr.emailErr && (
            <p className="text-red-500">{userErr.emailErr}</p>
          )}
        </label>
        <label>
          <input
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
              setUserErr("");
            }}
            required=""
            placeholder="Password"
            type={passShow ? "text" : "password"}
            className="input mb-4 "
            value={user.password}
          />
          {passShow ? (
            <IoMdEye
              onClick={() => setPassShow(false)}
              className="absolute top-7 right-5 -translate-y-1/2 text-2xl cursor-pointer"
            />
          ) : (
            <IoMdEyeOff
              onClick={() => setPassShow(true)}
              className="absolute top-7 right-5 -translate-y-1/2 text-2xl cursor-pointer"
            />
          )}
          {userErr.passwordErr && (
            <p className="text-red-500">{userErr.passwordErr}</p>
          )}
        </label>

        <button onClick={handleSubmit} disabled={loading} className="submit">
          Submit
        </button>
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
