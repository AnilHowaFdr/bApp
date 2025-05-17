import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userData = useSelector((state) => state.loggedData.user);

  return (
    <nav className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-white">
          <div>
            <button className="uppercase text-xl font-semibold py-4 px-6 border rounded-full">
              <Link to="/request">00.00 TK</Link>
            </button>
          </div>
          <div>
            <h3 className="text-xl capitalize font-bold">
              {userData?.displayName}
            </h3>
          </div>
          <div className="w-32 h-32 border-4 rounded-full">
            <img src={userData?.photoURL} alt="profile" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
