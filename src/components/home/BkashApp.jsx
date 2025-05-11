import React from "react";
import { Link } from "react-router-dom";

const BkashApp = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center">
        <Link to="/transfer" className="w-20">
          <img src="/bkash.png" alt="bkash" />
          <h3 className="text-white pt-1 text-lg font-semibold text-center">
            bKash
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default BkashApp;
