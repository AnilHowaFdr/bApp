import React, { useEffect, useState } from "react";
import UserItems from "./UserItems";
import { getDatabase, ref, onValue } from "firebase/database";
const UserComponent = () => {
  const db = getDatabase();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    onValue(ref(db, "users/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((res) => {
        arr.push({ ...res.val(), key: res.key });
      });
      setUserList(arr);
    });
  }, []);
  console.log(userList);
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl text-center text-white font-bold pb-4 border-b-2 ">
          User List
        </h2>
        {userList.map((item, key) => (
          <UserItems key={item.key} data={item} />
        ))}
      </div>
    </section>
  );
};

export default UserComponent;
