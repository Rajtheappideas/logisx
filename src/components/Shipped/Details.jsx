import React, { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import CounterOfferModal from "../CounterOfferModal";
import { useSelector } from "react-redux";
import CancelBidModal from "../CancelBidModal";

const Details = () => {
  const [showCounterOfferModal, setShowCounterOfferModal] = useState(false);
  const [showCancelBidModal, setShowCancelBidModal] = useState(false);

  const { activeComponent } = useSelector((state) => state.root.globalStates);

  return (
    <>
      <CounterOfferModal
        setShowCounterOfferModal={setShowCounterOfferModal}
        showCounterOfferModal={showCounterOfferModal}
      />
      <CancelBidModal
        setShowCancelBidModal={setShowCancelBidModal}
        showCancelBidModal={showCancelBidModal}
      />
      <div className="w-full space-y-4">
        {/* name + counter offer + price */}
        <div className="flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-x-2">
            <img
              src={require("../../assets/images/Ellipse 21.png")}
              alt=""
              className="md:h-20 md:w-20 h-12 w-12 object-contain object-center"
            />
            <div>
              <p className="lg:text-2xl text-sm text-[#4D4D4D] font-bold">
                Kate Smith
              </p>
              <p className="text-disableGray text-sm font-semibold">
                Company, LLC
              </p>
            </div>
          </div>
          {/* counter offer */}
          <div
            onClick={() => setShowCounterOfferModal(true)}
            className="cursor-pointer font-semibold uppercase md:text-base text-sm lg:w-60 md:w-40 md:p-3 p-1 rounded-lg transition duration-100 active:scale-95 hover:bg-primaryBlue hover:text-white border border-primaryBlue text-primaryBlue text-center"
          >
            counter offer
          </div>
          {/* amount */}
          <p className="text-textPurple md:text-2xl text-sm font-semibold flex justify-end mx-2">
            $ 1000
          </p>
        </div>
        <p className="text-sm text-disableGray">Trip detail</p>
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
            <p className="text-textColorGray lg:text-md text-sm ">
              7:00 am CST
            </p>
          </div>
          {/* line */}
          <div className="absolute top-[26px] left-[11px] h-8 w-0.5 bg-gray-400 rounded-sm"></div>
        </div>
        <div className="flex justify-between relative">
          <div className="flex items-start">
            <BsCircleFill className="text-textColorGray text-sm ml-1.5 mt-0.5 pr-0.5" />
            <div className="mx-2">
              <p className="lg:text-md text-sm font-semibold">Check</p>
              <p className="text-textColorGray lg:text-md text-sm">Gary, IN</p>
            </div>
          </div>
          <div className="">
            <p className="flex justify-end">Mar 8</p>
            <p className="text-textColorGray lg:text-md text-sm ">
              12:00 am CST
            </p>
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
            <p className="text-textColorGray lg:text-md text-sm ">
              7:00 am CST
            </p>
          </div>
        </div>
        <p className="text-textColorGray lg:text-md text-sm">
          Equipment needed
        </p>
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
            53 ft dry van with swing doors, Food grade, No damages or holes{" "}
            <br />
            Floor loaded
          </p>
        </div>
        <p className="text-textColorGray lg:text-md text-sm">
          Delivery history
        </p>
        <div className="w-full border border-boxBroder rounded-xl md:p-4 p-2">
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
            <div className="absolute top-[26px] left-[11px] h-8 w-0.5 bg-gray-400 rounded-sm"></div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex items-start">
              <TfiLocationPin className="text-greenColor text-2xl" />
              <div className="mx-2">
                <p className="text-sm font-semibold">Kalamazoo Distribution</p>
                <p className="text-textColorGray text-sm">
                  Kalamazoo, MI 28904
                </p>
              </div>
            </div>
            <div className="">
              <p className="flex justify-end">Mar 9</p>
              <p className="text-textColorGray  text-sm">4:00 pm CST</p>
            </div>
          </div>
          <p className="text-sm pt-3">
            Job description placed here. This is just a text holder for the
            meant time.
          </p>
        </div>
        {activeComponent === "pending bids" && (
          <div className="w-full border border-boxBroder rounded-xl md:p-4 p-2">
            <div className="flex justify-between relative">
              <div className="flex items-start">
                <TfiLocationPin className="text-primaryBlue text-2xl" />
                <div className="mx-2">
                  <p className="lg:text-sm text:sm font-semibold">
                    East Chicago Port
                  </p>
                  <p className="text-textColorGray text-sm">
                    Chicago, IL 69070
                  </p>
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
                  <p className="text-sm font-semibold">
                    Kalamazoo Distribution
                  </p>
                  <p className="text-textColorGray text-sm">
                    Kalamazoo, MI 28904
                  </p>
                </div>
              </div>
              <div className="">
                <p className="flex justify-end">Mar 9</p>
                <p className="text-textColorGray  text-sm">4:00 pm CST</p>
              </div>
            </div>
            <p className="text-sm pt-3">
              Job description placed here. This is just a text holder for the
              meant time.
            </p>
          </div>
        )}

        {/* btns */}
        {activeComponent === "pending bids" && (
          <div className="flex w-full justify-end items-center gap-x-2">
            <button
              onClick={() => setShowCancelBidModal(true)}
              className="red_button_outline"
            >
              Cancel bid
            </button>
            <button className="blue_button">Accept</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Details;
