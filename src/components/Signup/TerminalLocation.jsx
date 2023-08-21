import React from "react";
import { TfiLocationPin } from "react-icons/tfi";

const TerminalLocation = () => {
  return (
    <div className="w-full space-y-3">
      <p className="Title">Terminal location</p>
      <label className="Label">Location</label>
      <div className="w-full">
        <div className="flex items-center border-b-2 border-primaryBlue py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Zip code or city"
          />
        </div>
      </div>
      <div>
        <TfiLocationPin className="text-2xl inline-block" />
        <span className="text-gray-600 mx-1 inline-block">
          Use current location
        </span>
      </div>
      <img className="mt-4" src={require("../../assets/images/map.jpg")} />
    </div>
  );
};

export default TerminalLocation;
