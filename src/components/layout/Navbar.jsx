import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { currentUserData } from "../../reducer/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
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
            <Link to="/profile">
              <h3 className="text-xl capitalize font-bold">
                {userData?.displayName}
              </h3>
            </Link>
          </div>
          {/* <div className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 border-4 rounded-full">
              <Link to="/profile">
                <img src="/user.png" alt="profile" />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
