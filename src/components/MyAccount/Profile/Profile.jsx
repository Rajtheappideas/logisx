import React, { useState } from "react";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      {showProfile ? (
        <EditProfile setShowProfile={setShowProfile} />
      ) : (
        <div className="bg-bgLight w-full min-h-screen">
          <div className="bg-white md:p-4 p-2 rounded-2xl w-full min-h-screen md:space-y-4 space-y-2">
            {/* title & button */}
            <div className="flex justify-between items-center">
              <p className="md:text-2xl text-lg text-primaryBlue font-semibold">Profile</p>

              <button
                onClick={() => setShowProfile(true)}
                className="blue_button"
              >
                edit profile
              </button>
            </div>
            {/* fname & lname */}
            <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 place-items-start items-start">
              <div className="tracking-wide">
                <p className="text-textColorGray font-semibold">First Name</p>
                <p className="text-textBlackcolor font-normal">Carlos</p>
              </div>
              <div className="tracking-wide">
                <p className="text-textColorGray font-semibold">Last Name</p>
                <p className="text-textBlackcolor font-normal">Mitchell</p>
              </div>
            </div>
            {/* company */}
            <div className="tracking-wide">
              <p className="text-textColorGray font-semibold">Company</p>
              <p className="text-textBlackcolor font-normal">Goods transfer</p>
            </div>
            {/* email & phone */}
            <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 place-items-start items-start">
              <div className="tracking-wide">
                <p className="text-textColorGray font-semibold">Email</p>
                <p className="text-textBlackcolor font-normal">
                  carlosmitchell@mail.com
                </p>
              </div>
              <div className="tracking-wide">
                <p className="text-textColorGray font-semibold">Phone</p>
                <p className="text-textBlackcolor font-normal">+1 1245678945</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
