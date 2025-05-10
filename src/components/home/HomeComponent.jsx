import React from "react";
import BkashApp from "./BkashApp";
import AppImage from "./AppImage";

const HomeComponent = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <BkashApp />
        <AppImage />
      </div>
    </section>
  );
};

export default HomeComponent;
