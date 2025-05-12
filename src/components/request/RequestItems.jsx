import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const RequestItems = () => {
  return (
    <section className="min-h-screen">
      <div className="container px-4 text-white ">
        <div className="text-white text-2xl my-5">
          <Link to="/">
            <FaChevronLeft />
          </Link>
        </div>
      </div>
      <div className="container px-4 text-white mx-auto">
        <div className="flex items-center justify-center flex-col pt-10">
          <h2 className="text-2xl mb-4 font-semibold text-center">
            Request for Money
          </h2>
          <input
            type="number"
            placeholder="Enter amount"
            className="mt-14 mb-10 text-black rounded-md outline-none px-4 py-3 bg-white w-full max-w-md text-lg font-semibold"
          />
          <div className="w-full max-w-md h-36 bg-gray-800 rounded-xl mt-6">
            <label htmlFor="message"></label>
            <textarea
              className="w-full h-full p-4 text-white bg-transparent border-2 border-gray-600 rounded-xl resize-none outline-none text-lg font-medium"
              id="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className="bg-[#00000094] shadow px-5 py-2 rounded-md mt-4 text-white font-medium text-lg">
            <Link to="/addMoney">Send Request</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RequestItems;
