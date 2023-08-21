import React, { memo } from "react";
import { FiHeart } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeActiveJobDetails,
  handleChangeShippedDetails,
} from "../redux/globalStates";
import { RiTimerLine } from "react-icons/ri";

const SingleJob = memo(({ status, jobDescription }) => {
  const { activeHeader, activeComponent } = useSelector(
    (state) => state.root.globalStates
  );

  const dispatch = useDispatch();

  const handleDispatch = () => {
    if (
      activeComponent === "active jobs" ||
      activeComponent === "completed jobs"
    ) {
      return dispatch(handleChangeActiveJobDetails(true));
    } else if (
      activeComponent === "shipped" ||
      activeComponent === "pending bids"
    ) {
      return dispatch(handleChangeShippedDetails(true));
    }
  };

  return (
    <div className="w-full border border-[#B8D2E0] md:p-4 p-2 rounded-2xl space-y-3">
      {/* title + icon */}
      <div className="flex justify-between items-center">
        <p className="lg:text-2xl text-base text-textBlackcolor font-semibold">
          Bid RW3342D
        </p>
        <div className="flex items-center gap-x-1">
          {(activeHeader === "bids" || jobDescription !== undefined) && (
            <>
              <p className="">00:00:00</p>
              <RiTimerLine className="mr-1 text-xl" />
            </>
          )}
          <FiHeart role="button" className="text-2xl" />
        </div>
      </div>
      {/* departure */}
      <div className="flex justify-between relative">
        <div className="flex items-start">
          <TfiLocationPin className="text-primaryBlue text-2xl" />
          <div className="ml-2">
            <p className="lg:text-md text-sm font-semibold">
              East Chicago Port
            </p>
            <p className="text-textLightGray lg:text-md text-sm">
              Chicago, IL 69070
            </p>
          </div>
        </div>
        <div className="">
          <p className="flex justify-end">Mar 7</p>
          <p className="text-textLightGray lg:text-md text-sm ">7:00 am CST</p>
        </div>

        {/* line */}
        <div className="absolute z-0 top-[26px] left-[11px] h-7 w-0.5 bg-gray-400 rounded-sm"></div>
      </div>
      {/* destination */}
      <div className="flex justify-between">
        <div className="flex items-start">
          <TfiLocationPin className="text-greenColor text-2xl" />
          <div className="ml-2">
            <p className="lg:text-md text-sm  font-semibold">
              Kalamazoo Distribution
            </p>
            <p className="text-textLightGray lg:text-md text-sm">
              Kalamazoo, MI 28904
            </p>
          </div>
        </div>
        <div className="">
          <p className="flex justify-end">Mar 9</p>
          <p className="text-textLightGray lg:text-md text-sm">4:00 pm CST</p>
        </div>
      </div>
      {/* status */}
      <div className="flex items-center">
        {status === undefined ? (
          <p className="text-sm text-gray-500">{jobDescription}</p>
        ) : (
          <p className="text-lg font-semibold">Status :</p>
        )}
        {status === "in-transit" && (
          <span className="bg-primaryBlue text-white font-medium text-center md:w-32 md:ml-2 ml-1 w-24 md:h-10 md:leading-10 align-middle h-9 leading-9 rounded-3xl ">
            In-Transit
          </span>
        )}
        {status === "completed" && (
          <span className="bg-greenColor text-white font-medium text-center md:w-32 md:ml-2 ml-1 w-24 md:h-10 md:leading-10 align-middle h-9 leading-9 rounded-3xl ">
            Completed
          </span>
        )}
      </div>
      {/* amount */}
      <div className="flex items-center justify-between">
        <p className="lg:text-2xl text-lg font-semibold text-textPurple">
          $ 1000
        </p>
        <button
          className="blue_button uppercase tracking-wide"
          onClick={() => handleDispatch()}
        >
          view{" "}
          {(activeComponent === "pending_bids" ||
            jobDescription !== undefined) &&
            "Bids"}
        </button>
      </div>
    </div>
  );
});

export default SingleJob;
