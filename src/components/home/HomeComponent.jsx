import React from "react";
import BkashApp from "./BkashApp";
import AppImage from "./AppImage";
import { useSelector } from "react-redux";

const HomeComponent = () => {
  const userData = useSelector((state) => state.loggedData.user);
  console.log(userData);
  return (
    <section className="py-12">
      <div className="">
        <BkashApp />
        <AppImage />
      </div>
    </section>
  );
};

export default HomeComponent;
