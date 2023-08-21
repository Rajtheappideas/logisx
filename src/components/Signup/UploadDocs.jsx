import React from "react";
import { RiCamera3Line } from "react-icons/ri";

const UploadDocs = () => {
  return (
    <div className="w-full">
      <p className="Title">Upload docs</p>
      <form className="w-full space-y-3">
        <div className="space-y-2">
          <label className=" Label">EIN number</label>
          <input
            className="input_field"
            type="text"
            placeholder="First name"
            name="name"
          />
        </div>
        <div className="space-y-2">
          <label className=" Label">How many loading docks ?</label>
          <input
            className="input_field"
            type="text"
            placeholder="1"
            name="name"
          />
        </div>

        <div className="space-y-2">
          <label className=" Label">Loading dock numbers</label>
          <input
            className="input_field"
            type="text"
            placeholder="Loading dock numbers"
            name="text"
          />
        </div>
        <div className="space-y-2">
          <label className=" text-textColorGray lg:text-lg text-sm">
            Loading dock photos
          </label>
          <p className="lg:w-36 lg:h-32 w-28 h-28 relative flex items-center justify-center text-center rounded-lg bg-gray-200">
            <input className="inset-0 opacity-0 absolute" type="file" />
            <RiCamera3Line className="text-2xl text-gray-500" />
          </p>
        </div>
      </form>
    </div>
  );
};

export default UploadDocs;
