import React from "react";
import UserItems from "./UserItems";

const UserComponent = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <UserItems />
      </div>
    </section>
  );
};

export default UserComponent;
