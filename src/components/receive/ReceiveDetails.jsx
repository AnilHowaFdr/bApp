import React, { useState } from "react";

const ReceiveDetails = () => {
  const [receiveList, setReceiveList] = useState([]);
  // useEffect(() => {
  //     let arr = [];
  //     onValue(ref(db, "receive/"), (snapshot) => {
  //       snapshot.forEach((item) => {
  //         const data = item.val();
  //         const id = item.id;
  //         arr.push({ ...data, id });
  //       });
  //       setReceiveList(arr);
  //     });
  //   }, []);
  return <div></div>;
};

export default ReceiveDetails;
