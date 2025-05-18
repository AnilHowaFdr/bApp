import React from "react";
import { TbLogout2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { currentUserData } from "../../reducer/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.loggedData.user);
  const handleLogOut = () => {
    // console.log("logout");
    // dispatch(currentUserData(null));
    localStorage.removeItem("userData");
    location.reload();
  };

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
          <div className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 border-4 rounded-full">
              <img src="/user.png" alt="profile" />
            </div>
            <button
              onClick={handleLogOut}
              className="mt-4 text-[15px] text-black md:text-[17px] text-center overflow-hidden hover:text-white mb-2 hover:bg-transparent hover:border-[1px] hover:scale-110 active:scale-95 transition-all p-2 md:p-3 bg-white rounded-md flex items-center gap-2"
            >
              <TbLogout2 /> LogOut
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
