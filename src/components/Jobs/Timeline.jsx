import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";

const Timeline = () => {
  return (
    <div className="w-full space-y-4">
    <img
      src={require("../../assets/images/Mapsicle Map.png")}
      alt="Mapsicle"
      className="w-full"
    />
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="">
          <img
            src={require("../../assets/images/Ellipse 21.png")}
            alt="Ellipse"
            style={{ width: "80px" }}
          />
        </div>
        <div className="mx-4">
          <p className="font-semibold">Kate Smith</p>
          <p className="text-textColorGray text-sm">Company, LLC</p>
        </div>
      </div>
      <p className="text-textPurple font-semibold text-2xl">$1000</p>
    </div>
    <div className="flex justify-between items-center text-xl">
      <p className="font-bold">
        Status :{" "}
        <span className="text-primaryBlue font-bold">
          Trucker en route to pick-up
        </span>
      </p>
      <button className="blue_button text-base">Start Loading</button>
    </div>
    <p className="text-textColorGray text-sm">Trip detail</p>
    <div className="flex justify-between relative">
      <div className="flex items-start">
        <TfiLocationPin className="text-primaryBlue text-2xl" />
        <div className="mx-2">
          <p className="lg:text-md text:sm font-semibold">
            East Chicago Port
          </p>
          <p className="text-textColorGray lg:text-md text-sm">
            Chicago, IL 69070
          </p>
        </div>
      </div>
      <div className="">
        <p className="flex justify-end">Mar 7</p>
        <p className="text-textColorGray lg:text-md text-sm ">7:00 am CST</p>
      </div>
      {/* line */}
      <div className="absolute top-[26px] left-[11px] h-7 w-0.5 bg-gray-400 rounded-sm"></div>
    </div>
    <div className="flex justify-between relative">
      <div className="flex items-start">
        <BsCircleFill className="text-textColorGray text-sm ml-1.5" />
        <div className="mx-2">
          <p className="lg:text-md text-sm font-semibold">Check</p>
          <p className="text-textColorGray lg:text-md text-sm">Gary, IN</p>
        </div>
      </div>
      <div className="">
        <p className="flex justify-end">Mar 8</p>
        <p className="text-textColorGray lg:text-md text-sm ">12:00 am CST</p>
      </div>
      {/* line */}
      <div className="absolute top-[21px] left-[11px] h-9 w-0.5 bg-gray-400 rounded-sm"></div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-start">
        <TfiLocationPin className="text-greenColor text-2xl" />
        <div className="mx-2">
          <p className="lg:text-md text-sm font-semibold">
            East Chicago Port
          </p>
          <p className="text-textColorGray lg:text-md text-sm">
            Chicago, IL 69070
          </p>
        </div>
      </div>
      <div className="">
        <p className="flex justify-end">Mar 7</p>
        <p className="text-textColorGray lg:text-md text-sm ">7:00 am CST</p>
      </div>
    </div>
  </div>
  );
};

export default Timeline;
