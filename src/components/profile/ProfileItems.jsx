import React from "react";
import { FaChevronLeft, FaUserFriends } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileItems = () => {
  const userData = useSelector((state) => state.loggedData.user);
  const handleLogOut = () => {
    // console.log("logout");
    // dispatch(currentUserData(null));
    localStorage.removeItem("userData");
    location.reload();
  };
  return (
    <>
      <span className="text-2xl text-white">
        <Link to="/">
          <FaChevronLeft />
        </Link>
      </span>
      <div className="flex items-center gap-10 justify-center">
        <div className=" w-1/2 flex items-center gap-2">
          <FaUserFriends className="text-2xl text-white" />
          <Link to="/user" className="text-white text-lg ">
            <span>People</span>
          </Link>
        </div>
        <div className="flex items-center justify-center flex-col bg-white p-3 w-1/2">
          <div className="w-32 h-32 border-4 rounded-full">
            {/* {userData?.photoURL} */}
            <img src="/user.png" alt="profile" />
          </div>
          <div className="py-3 border-b-2 border-b-gray-500 w-1/2">
            <h3 className="text-xl capitalize text-center font-bold ">
              {userData?.displayName}
            </h3>
          </div>

          <button
            onClick={handleLogOut}
            className=" mt-10 text-[15px] text-black md:text-[17px] text-center overflow-hidden hover:text-white mb-2 hover:bg-transparent hover:border-[1px] hover:scale-110 active:scale-95 transition-all p-2 md:p-3 bg-white rounded-md flex items-center gap-2"
          >
            <TbLogout2 /> LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileItems;
