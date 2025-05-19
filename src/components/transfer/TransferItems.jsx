import React, { useState } from "react";
import { getDatabase, set, ref } from "firebase/database";
// import { useDispatch } from "react-redux";
// import { currentTransferData } from "../../reducer/transferSlice";

const TransferItems = () => {
  const db = getDatabase();
  const [amount, setAmount] = useState("");
  const [num, setNum] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();

  const handleSend = () => {
    if (!num) {
      alert("Number is required");
    } else if (!password) {
      alert("Pin Number is required");
    } else {
      set(ref(db, "amount/"), {
        num: num,
        amount: amount,
        pin: password,
      })
        .then(() => {
          // dispatch(currentTransferData(transactions));
          console.log(amount);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="w-full flex justify-between items-center mb-10">
          <div className=" bg-white relative text-purple-700 border rounded-full w-[180px]">
            <input
              type="number"
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              className="pl-5 font-semibold text-lg w-full outline-none rounded-full"
            />
            <p className="absolute top-1 right-5 font-semibold text-gray-500">
              TK
            </p>
          </div>
          <div>
            <div className="w-20 mb-10">
              <img src="/bkash.png" alt="" />
              <h3 className="text-xl text-center pt-1 text-white font-semibold">
                bKash
              </h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 text-white font-bold text-lg">
          <div className="way ">
            <label htmlFor="sendMoney">Send Money</label>
            <input type="radio" name="option" id="sendMoney" />
          </div>
          <div className="way">
            <label htmlFor="cashOut">Cash Out</label>
            <input type="radio" name="option" id="cashOut" />
          </div>
        </div>
        <div className="w-full max-w-[700px] mx-auto text-xl font-medium mt-5 px-5 relative ">
          <input
            className=" border outline-none text-purple-700 bg-white amount pl-5 px-1 w-full h-14 rounded-xl "
            type="number"
            placeholder="Number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          ></input>
          <p className="absolute top-4 right-10 text-[#32323288]"> Bkash </p>
        </div>
        <div className="flex items-center justify-center my-8 text-gray-300 text-lg">
          <div className="typeAgent ">
            <label htmlFor="agent">Agent</label>
            <input type="radio" name="or" id="agent" />
          </div>
          <div className="typeAgent">
            <label htmlFor="personal">Personal</label>
            <input type="radio" name="or" id="personal" />
          </div>
        </div>
        <div className="w-full max-w-[700px] mx-auto text-xl font-medium mt-5 px-5 relative ">
          <input
            className=" border outline-none text-purple-700 bg-white amount pl-5 px-1 w-full h-14 rounded-xl "
            type="number"
            placeholder="PIN"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="w-fit mx-auto">
          <button
            onClick={handleSend}
            className=" bg-white text-gray-400 mt-10 text-xl rounded-lg font-bold hover:scale-95 hover:text-gray-700  active:scale-100 transition-all py-3 px-7"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransferItems;
