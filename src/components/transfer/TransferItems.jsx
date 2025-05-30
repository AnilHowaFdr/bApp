import React, { useEffect, useState } from "react";
import { getDatabase, set, ref, push, onValue } from "firebase/database";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { currentTransferData } from "../../reducer/transferSlice";

const TransferItems = () => {
  const db = getDatabase();
  const [send, setSend] = useState([]);
  const [amount, setAmount] = useState("");
  const [num, setNum] = useState("");
  const [type, setType] = useState("sendMoney");
  const userData = useSelector((state) => state.loggedData.user);
  // const [password, setPassword] = useState("");
  // const dispatch = useDispatch();

  const handleSend = () => {
    if (!amount) {
      alert("Amount is required");
    } else if (!num) {
      alert("Number is required");
    } else {
      set(
        push(ref(db, "sendAmount/"), {
          senderId: userData.uid,
          senderName: userData.displayName,
          senderImg: userData.photoURL,
          sendNum: num,
          sendAmount: amount,
          type: type,
          // receiverId: data.key,
          // receiverName: data.displayName,
          // receiverImg: data.photoURL,
        })
      );
    }
  };
  // useEffect(() => {
  //   let arr = [];
  //   onValue(ref(db, "sendAmount/"), (snapshot) => {
  //     snapshot.forEach((item) => {
  //       // if (item.val().senderId === userData.uid) {
  //       //   console.log(item.val());
  //       // }
  //       console.log(userData.uid);
  //     });
  //   });
  // }, []);
  // useEffect(() => {
  //   let arr = [];
  //   onValue(ref(db, "sendAmount/"), (snapshot) => {
  //     snapshot.forEach((item) => {
  //       const data = item.val();
  //       const id = item.id;
  //       arr.push({ ...data, id });
  //     });
  //     setSend(arr);
  //   });
  // }, []);

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="text-2xl text-white pt-3">
          <Link to="/">
            <FaChevronLeft />
          </Link>
        </div>
        <div className="w-full flex justify-between items-center mb-10 mt-4">
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
            <input
              type="radio"
              checked={type === "sendMoney"}
              onChange={(e) => setType(e.target.value)}
              value="send"
              name="option"
              id="sendMoney"
            />
          </div>
          <div className="way">
            <label htmlFor="cashOut">Cash Out</label>
            <input
              type="radio"
              checked={type === "cashOut"}
              onChange={(e) => setType(e.target.value)}
              name="option"
              value="cashOut"
              id="cashOut"
            />
          </div>
        </div>
        <div className="w-full max-w-[700px] mx-auto text-xl font-medium mt-5 px-5 relative ">
          <input
            className="border outline-none text-purple-700 bg-white amount pl-5 px-1 w-full h-14 rounded-xl "
            type="number"
            placeholder="Number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
          <p className="absolute top-4 right-10 text-[#32323288]"> Bkash </p>
        </div>
        {/* <div className="flex items-center justify-center my-8 text-gray-300 text-lg">
          <div className="typeAgent ">
            <label htmlFor="agent">Agent</label>
            <input type="radio" name="or" id="agent" />
          </div>
          <div className="typeAgent">
            <label htmlFor="personal">Personal</label>
            <input type="radio" name="or" id="personal" />
          </div>
        </div> */}
        {/* <div className="w-full max-w-[700px] mx-auto text-xl font-medium mt-5 px-5 relative ">
          <input
            className=" border outline-none text-purple-700 bg-white amount pl-5 px-1 w-full h-14 rounded-xl "
            type="number"
            placeholder="PIN"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div> */}
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
