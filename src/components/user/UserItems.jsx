import React from "react";

const UserItems = () => {
  return (
    <>
      <h2 className="text-2xl text-center text-white font-bold pb-2 border-b-2 ">
        User List
      </h2>

      <table className="mt-6 w-full">
        <tr className="flex items-center justify-between text-white text-center">
          <th>Img</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Time</th>
        </tr>
        <tr className="py-3 flex items-center justify-between text-white text-center">
          <td className="w-12 h-12 rounded-full border">
            <img src="/user.png" alt="" />
          </td>
          <td>
            {" "}
            <h3 className="text-base">Name</h3>
          </td>
          <td>
            <h4>amount</h4>
          </td>
          <td>
            <p>Time</p>
          </td>
        </tr>
      </table>
      {/* <div className="w-12 h-12 rounded-full border">
          <img src="/user.png" alt="" />
        </div>
        <h3 className="text-base">Name</h3>
        <h4>amount</h4>
        <p>time</p> */}
    </>
  );
};

export default UserItems;
