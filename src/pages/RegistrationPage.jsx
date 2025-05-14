import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [passShow, setPassShow] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [userErr, setUserErr] = useState({
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    passwordErr: "",
  });
  const handleSubmit = () => {
    // const regex = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;

    if (!user.firstName) {
      setUserErr({ ...userErr, firstNameErr: "First Name is required!" });
    } else if (!user.lastName) {
      setUserErr({ ...userErr, lastNameErr: "Last Name is required!" });
    } else if (!user.email) {
      setUserErr({ ...userErr, emailErr: "Email is required!" });
    } else if (!user.password) {
      setUserErr({ ...userErr, passwordErr: "Password is required!" });
    } else {
      //  else if (!regex.test(user.password)) {
      //   setUserErr({
      //     ...userErr,
      //     passwordErr: "Please enter a strong password!",
      //   });
      // } else {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          updateProfile(auth.currentUser, {
            displayName: user.firstName + user.lastName,
            photoURL: "/user.png",
          })
            .then(() => {
              sendEmailVerification(auth.currentUser).then(() => {
                setUser({
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                });
                toast.success("Please Verify your email");
                setTimeout(() => navigate("/login"), 2000);
              });
            })
            .then(() => {
              console.log(res.user);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code == "auth/invalid-email") {
            setUserErr({
              ...userErr,
              emailErr: "Invalid Email!",
            });
          } else if (error.code == "auth/weak-password") {
            setUserErr({
              ...userErr,
              passwordErr: "Password should be at least 6 characters!",
            });
          } else if (error.code == "auth/email-already-in-use") {
            setUserErr({
              ...userErr,
              emailErr: "Already email in use!",
            });
          } else {
            console.log(error.message);
          }
        });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer position="top-right" autoClose={5000} theme="light" />

      <div className="form">
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex pt-4">
          <label>
            <input
              onChange={(e) => {
                setUser({ ...user, firstName: e.target.value });
                setUserErr("");
              }}
              required=""
              placeholder="First Name"
              type="text"
              className="input"
              value={user.firstName}
            />
            {userErr.firstNameErr && (
              <p className="text-red-500">{userErr.firstNameErr}</p>
            )}
          </label>

          <label>
            <input
              onChange={(e) => {
                setUser({ ...user, lastName: e.target.value });
                setUserErr("");
              }}
              required=""
              placeholder="Last Name"
              type="text"
              className="input"
              value={user.lastName}
            />
            {userErr.lastNameErr && (
              <p className="text-red-500">{userErr.lastNameErr}</p>
            )}
          </label>
        </div>
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
        <button onClick={handleSubmit} className="submit">
          Submit
        </button>
        <p className="signin">
          Already have an account ?
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
