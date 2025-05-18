import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Layout = () => {
  const userData = useSelector((state) => state.loggedData.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
