import React from "react";
import { Link } from "react-router-dom";

const BkashApp = () => {
  return (
    <div className="flex flex-wrap items-center">
      <Link to="/transfer" className="w-32">
        <img src="/bkash.png" alt="bkash" />
        <h3 className="text-white pt-3 text-lg font-semibold text-center">
          bKash
        </h3>
      </Link>
    </div>
  );
};

export default BkashApp;
