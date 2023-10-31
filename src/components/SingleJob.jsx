import React, { memo } from "react";
import { FiHeart } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeActiveJobDetails } from "../redux/globalStates";
import { RiTimerLine } from "react-icons/ri";
import { handleChangeShowBidProposal } from "../redux/BidSlice";

const SingleJob = memo(({ setActiveBidId, jobDescription, data }) => {
  const { activeHeader, activeComponent } = useSelector(
    (state) => state.root.globalStates
  );

  const dispatch = useDispatch();

  const handleDispatch = (id) => {
    if (
      activeComponent === "active jobs" ||
      activeComponent === "completed jobs"
    ) {
      return dispatch(handleChangeActiveJobDetails(true));
    } else if (activeComponent === "pending bids") {
      dispatch(handleChangeShowBidProposal(true));
      setActiveBidId(data?._id);
    }
  };

  return (
    <div className="w-full border border-[#B8D2E0] md:p-4 p-2 rounded-2xl space-y-2">
      {/* title + icon */}
      <div className="flex justify-between items-center">
        <p className="lg:text-2xl text-base text-textBlackcolor font-semibold">
          {data?.bidId}
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
      <div className="flex justify-between relative w-full">
        <div className="flex items-start w-1/3">
          <TfiLocationPin className="text-primaryBlue text-2xl" />
          <div className="ml-2">
            <p className="lg:text-md text-sm font-semibold">
              {data?.departureLocation}
            </p>
          </div>
        </div>
        <div className="w-1/3 text-right">
          <p>{data?.departureDate}</p>
          <p className="text-textLightGray lg:text-md text-sm">
            {data?.departureTime}
          </p>
        </div>

        {/*vertical line */}
        <div className="absolute z-0 top-[26px] left-[11px] h-7 w-0.5 bg-gray-400 rounded-sm"></div>
      </div>
      {/* arrival */}
      <div className="flex justify-between w-full">
        <div className="flex items-start w-1/3">
          <TfiLocationPin className="text-greenColor text-2xl" />
          <div className="ml-2">
            <p className="lg:text-md text-sm  font-semibold">
              {data?.arrivalLocation}
            </p>
          </div>
        </div>
        <div className="w-1/3 text-right">
          <p>{data?.arrivalDate}</p>
          <p className="text-textLightGray lg:text-md text-sm">
            {data?.arrivalTime}
          </p>
        </div>
      </div>

      {/* status */}
      <div className="flex items-center">
        <p className="text-lg font-semibold">Status :</p>
        <span
          className={`${
            (data?.status === "in-transit" || "pending") && "bg-primaryBlue"
          }
          ${data?.status === "complete" && "bg-greenColor"}
          ${data?.status === "cancelled" && "bg-gray-300"}
          capitalize text-white font-medium text-center md:w-32 md:ml-2 ml-1 w-24 md:h-10 md:leading-10 align-middle h-9 leading-9 rounded-3xl`}
        >
          {data?.status}
        </span>
      </div>
      {/* description */}
      <p className="text-sm text-gray-500">{data?.jobDescription}</p>
      {/* amount */}
      <div className="flex items-center justify-between">
        <p className="lg:text-2xl text-lg font-semibold text-textPurple">
          $ {data?.price}
        </p>
        <button
          className="blue_button uppercase tracking-wide"
          onClick={() => handleDispatch()}
        >
          view{" "}
          {(activeComponent === "pending bids" ||
            jobDescription !== undefined) &&
            "Bids"}
        </button>
      </div>
    </div>
  );
});

export default SingleJob;
