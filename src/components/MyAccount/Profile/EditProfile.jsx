import React from "react";
import { GoArrowLeft } from "react-icons/go";

const EditProfile = ({ setShowProfile }) => {
  return (
    <div className="bg-bgLight w-full min-h-screen">
      <div className="bg-white md:p-4 p-2 rounded-2xl w-full min-h-screen md:space-y-4 space-y-2">
        <p
          onClick={() => setShowProfile(false)}
          className="md:text-2xl text-md text-primaryBlue font-semibold flex items-center cursor-pointer w-auto"
        >
          <GoArrowLeft className="inline-block mr-2" />
          Edit Profile
        </p>
        <form className="grid md:grid-cols-2 place-items-start items-start gap-3 md:gap-5">
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" text-primaryBlue font-semibold text-sm">
              Departure location
            </label>
            <input
              className="input_field"
              type="text"
              placeholder="Carlos"
              name="text"
            />
          </div>
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" text-primaryBlue font-semibold text-sm">
              Departure location
            </label>
            <input
              className="input_field"
              type="text"
              placeholder="Mitchell"
              name="text"
            />
          </div>
          <div className="w-full md:space-y-3 space-y-2 md:col-span-2">
            <label className=" text-primaryBlue font-semibold text-sm">
              Company
            </label>
            <input
              className="input_field"
              type="text"
              placeholder="Goods Transfer"
              name="text"
            />
          </div>
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" text-primaryBlue font-semibold text-sm">
              Departure location
            </label>
            <input
              className="input_field"
              type="email"
              placeholder="carlosmitchell@gmail.com"
              name="text"
            />
          </div>
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" text-primaryBlue font-semibold text-sm">
              Number
            </label>
            <input
              className="input_field"
              type="phone"
              placeholder="+1 1234567894"
              name="text"
            />
          </div>
          <button type="button" className="blue_button">
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
