import React from "react";
import { BiSolidHeart } from "react-icons/bi";
import { RiTimerLine } from "react-icons/ri";
import { TfiLocationPin } from "react-icons/tfi";
import { useSelector } from "react-redux";

const Details = () => {
  const { activeComponent } = useSelector((state) => state.root.globalStates);

  return (
    <div className="w-full md:space-y-4 space-y-2">
      {/* id + timer */}
      <div className="flex justify-between items-start">
        <p className="lg:text-2xl text-md text-[#4D4D4D] font-bold">
          Bid RW3342D
        </p>
        <div className="">
          <div className="flex items-center justify-end">
            {activeComponent === "active jobs" && (
              <>
                <RiTimerLine className="mx-1" />
                <p className="mx-1">00:00:00</p>
              </>
            )}
            <BiSolidHeart color="red" className="mx-1 text-xl" />
          </div>
          {/* amount */}
          <p className="text-textPurple md:text-2xl text-lg font-semibold float-right">$ 1100</p>
        </div>
      </div>
      <p className="text-sm text-disableGray">Trip detail</p>
      {/* departue */}
      <div className="flex justify-between relative">
        <div className="flex items-start">
          <TfiLocationPin className="text-primaryBlue text-2xl" />
          <div className="md:mx-2 mx-1">
            <p className="text:sm font-semibold">East Chicago Port</p>
            <p className="text-textColorGray text-sm">Chicago, IL 69070</p>
          </div>
        </div>
        <div className="">
          <p className="flex justify-end">Mar 7</p>
          <p className="text-textColorGray text-sm ">7:00 am CST</p>
        </div>
        {/* line */}
        <div className="absolute top-[26px] left-[11px] md:h-8 h-7 w-0.5 bg-gray-400 rounded-sm"></div>
      </div>
      {/* destination */}
      <div className="flex justify-between md:pt-0 pt-1">
        <div className="flex items-start">
          <TfiLocationPin className="text-greenColor text-2xl" />
          <div className="md:mx-2 mx-1">
            <p className="text-md font-semibold">Kalamazoo Distribution</p>
            <p className="text-textColorGray text-sm">Kalamazoo, MI 28904</p>
          </div>
        </div>
        <div className="">
          <p className="flex justify-end items-center">Mar 9</p>
          <p className="text-textColorGray text-sm">4:00 pm CST</p>
        </div>
      </div>
      <p className="text-textColorGray text-sm">Equipment needed</p>
      <div className="flex items-center">
        <input type="checkbox" className="" />
        <p className="mx-2 font-semibold">Dry van</p>
      </div>
      <p className="text-textColorGray text-sm">Endorsements</p>
      <div className="flex items-center">
        <input type="checkbox" className="" />
        <p className="mx-2 font-semibold">TWIC</p>
      </div>
      <p className="text-textColorGray text-sm">Specification</p>
      <div className="flex items-center">
        <p className="text-sm font-semibold">
          53 ft dry van with swing doors, Food grade, No damages or holes <br />
          Floor loaded
        </p>
      </div>
      <p className="text-textColorGray text-sm">Delivery history</p>
      <div className="w-full border border-boxBroder rounded-xl md:p-4 p-2">
        <div className="flex justify-between relative">
          <div className="flex items-start">
            <TfiLocationPin className="text-primaryBlue text-2xl" />
            <div className="md:mx-2 mx-1">
              <p className="lg:text-sm text:sm font-semibold">
                East Chicago Port
              </p>
              <p className="text-textColorGray text-sm">Chicago, IL 69070</p>
            </div>
          </div>
          <div className="">
            <p className="flex justify-end">Mar 7</p>
            <p className="text-textColorGray text-sm ">7:00 am CST</p>
          </div>
          {/* line */}
          <div className="absolute top-[26px] left-[11px] h-7 w-0.5 bg-gray-400 rounded-sm"></div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex items-start">
            <TfiLocationPin className="text-greenColor text-2xl" />
            <div className="md:mx-2 mx-1">
              <p className="text-sm font-semibold">Kalamazoo Distribution</p>
              <p className="text-textColorGray text-sm">Kalamazoo, MI 28904</p>
            </div>
          </div>
          <div className="">
            <p className="flex justify-end">Mar 9</p>
            <p className="text-textColorGray  text-sm">4:00 pm CST</p>
          </div>
        </div>
        <p className="text-sm pt-3">
          Job description placed here. This is just a text holder for the meant
          time.
        </p>
      </div>
      <div className="w-full border border-boxBroder rounded-xl md:p-4 p-2">
        <div className="flex justify-between relative">
          <div className="flex items-start">
            <TfiLocationPin className="text-primaryBlue text-2xl" />
            <div className="md:mx-2 mx-1">
              <p className="lg:text-sm text:sm font-semibold">
                East Chicago Port
              </p>
              <p className="text-textColorGray text-sm">Chicago, IL 69070</p>
            </div>
          </div>
          <div className="">
            <p className="flex justify-end">Mar 7</p>
            <p className="text-textColorGray text-sm ">7:00 am CST</p>
          </div>
          {/* line */}
          <div className="absolute top-[26px] left-[11px] h-7 w-0.5 bg-gray-400 rounded-sm"></div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex items-start">
            <TfiLocationPin className="text-greenColor text-2xl" />
            <div className="md:mx-2 mx-1">
              <p className="text-sm font-semibold">Kalamazoo Distribution</p>
              <p className="text-textColorGray text-sm">Kalamazoo, MI 28904</p>
            </div>
          </div>
          <div className="">
            <p className="flex justify-end">Mar 9</p>
            <p className="text-textColorGray  text-sm">4:00 pm CST</p>
          </div>
        </div>
        <p className="text-sm pt-3">
          Job description placed here. This is just a text holder for the meant
          time.
        </p>
      </div>
    </div>
  );
};

export default Details;
