import React from "react";
import ProfileItems from "./ProfileItems";

const ProfileComponent = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 md:px-6">
        <ProfileItems />
      </div>
    </section>
  );
};

export default ProfileComponent;
