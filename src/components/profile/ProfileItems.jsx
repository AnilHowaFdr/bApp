import React from "react";
import { TbLogout2 } from "react-icons/tb";
import { useSelector } from "react-redux";

const ProfileItems = () => {
  const userData = useSelector((state) => state.loggedData.user);
  const handleLogOut = () => {
    // console.log("logout");
    // dispatch(currentUserData(null));
    localStorage.removeItem("userData");
    location.reload();
  };
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-32 h-32 border-4 rounded-full">
        {/* {userData?.photoURL} */}
        <img src="/user.png" alt="profile" />
      </div>
      <div className="pt-3">
        <h3 className="text-xl capitalize font-bold text-white">
          {userData?.displayName}
        </h3>
      </div>
      <button
        onClick={handleLogOut}
        className="mt-4 text-[15px] text-black md:text-[17px] text-center overflow-hidden hover:text-white mb-2 hover:bg-transparent hover:border-[1px] hover:scale-110 active:scale-95 transition-all p-2 md:p-3 bg-white rounded-md flex items-center gap-2"
      >
        <TbLogout2 /> LogOut
      </button>
    </div>
  );
};

export default ProfileItems;
