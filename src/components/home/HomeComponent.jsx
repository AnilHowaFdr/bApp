import React from "react";
import { Link } from "react-router-dom";
import BkashApp from "./BkashApp";

const HomeComponent = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <BkashApp />
      </div>
    </section>
  );
};

export default HomeComponent;
