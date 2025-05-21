import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const UserItems = ({ data }) => {
  const userData = useSelector((state) => state.loggedData.user);
  const db = getDatabase();

  return (
    <div className="text-white flex items-center justify-between py-4">
      <div className="w-12 h-12 rounded-full border">
        <img src="/user.png" alt="" />
      </div>
      <h3 className="text-base">{data?.username}</h3>
      <h4>amount</h4>
      <p>time</p>
    </div>
  );
};

export default UserItems;
