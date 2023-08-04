import React from "react";
import { BiSolidHeart } from "react-icons/bi";
import { RiTimerLine } from "react-icons/ri";
import { TfiLocationPin } from "react-icons/tfi";

const Details = () => {
  return (
    <div className="w-full space-y-4">
      {/* id + timer */}
      <div className="flex justify-between items-center">
        <div className="">
          <p className="lg:text-2xl text-md text-[#4D4D4D] font-bold">
            Bid RW3342D
          </p>
        </div>
        <div className="flex items-center">
          <RiTimerLine className="mx-1" />
          <p className="mx-1">00:00:00</p>
          <BiSolidHeart color="red" className="mx-1" />
        </div>
      </div>
      {/* amount */}
      <p className="text-textPurple text-2xl font-semibold flex justify-end mx-2">
        $ 1000
      </p>
      <p className="text-sm text-disableGray">Trip detail</p>
      {/* departue */}
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
      {/* destination */}
      <div className="flex justify-between">
        <div className="flex items-start">
          <TfiLocationPin className="text-greenColor text-2xl" />
          <div className="mx-2">
            <p className="text-md font-semibold">Kalamazoo Distribution</p>
            <p className="text-textColorGray lg:text-md text-sm">
              Kalamazoo, MI 28904
            </p>
          </div>
        </div>
        <div className="">
          <p className="flex justify-end">Mar 9</p>
          <p className="text-textColorGray lg:text-md text-sm">4:00 pm CST</p>
        </div>
      </div>
      <p className="text-textColorGray lg:text-md text-sm">Equipment needed</p>
      <div className="flex">
        <input type="checkbox" className="" />
        <p className="mx-2 font-semibold">Dry van</p>
      </div>
      <p className="text-textColorGray lg:text-md text-sm">Endorsements</p>
      <div className="flex">
        <input type="checkbox" className="" />
        <p className="mx-2 font-semibold">TWIC</p>
      </div>
      <p className="text-textColorGray lg:text-md text-sm">Specification</p>
      <div className="flex">
        <p className="text-sm font-semibold">
          53 ft dry van with swing doors, Food grade, No damages or holes <br />
          Floor loaded
        </p>
      </div>
      <p className="text-textColorGray lg:text-md text-sm">Delivery history</p>
      <div className="w-full border border-[#B8D2E0] rounded-xl md:p-4 p-2">
        <div className="flex justify-between relative">
          <div className="flex items-start">
            <TfiLocationPin className="text-primaryBlue text-2xl" />
            <div className="mx-2">
              <p className="lg:text-sm text:sm font-semibold">
                East Chicago Port
              </p>
              <p className="text-textColorGray text-sm">Chicago, IL 69070</p>
            </div>
          </div>
          <div className="">
            <p className="flex justify-end">Mar 7</p>
            <p className="text-textColorGray lg:text-md text-sm ">
              7:00 am CST
            </p>
          </div>
          {/* line */}
          <div className="absolute top-[26px] left-[11px] h-7 w-0.5 bg-gray-400 rounded-sm"></div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex items-start">
            <TfiLocationPin className="text-greenColor text-2xl" />
            <div className="mx-2">
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
      <div className="w-full border border-[#B8D2E0] rounded-xl md:p-4 p-2">
        <div className="flex justify-between relative">
          <div className="flex items-start">
            <TfiLocationPin className="text-primaryBlue text-2xl" />
            <div className="mx-2">
              <p className="lg:text-sm text:sm font-semibold">
                East Chicago Port
              </p>
              <p className="text-textColorGray text-sm">Chicago, IL 69070</p>
            </div>
          </div>
          <div className="">
            <p className="flex justify-end">Mar 7</p>
            <p className="text-textColorGray lg:text-md text-sm ">
              7:00 am CST
            </p>
          </div>
          {/* line */}
          <div className="absolute top-[26px] left-[11px] h-7 w-0.5 bg-gray-400 rounded-sm"></div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex items-start">
            <TfiLocationPin className="text-greenColor text-2xl" />
            <div className="mx-2">
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
