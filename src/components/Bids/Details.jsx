import React, { useState } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import CounterOfferModal from "../CounterOfferModal";
import { useSelector } from "react-redux";
import CancelBidModal from "../CancelBidModal";
import moment from "moment/moment";
import { imageUrl } from "../../Baseurl";

const Details = ({ singleBidProposal }) => {
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
              src={imageUrl.concat(singleBidProposal?.truckerId?.profile)}
              alt={singleBidProposal?.truckerId?.lname}
              className="md:h-20 md:w-20 h-12 w-12 rounded-full object-contain object-center"
            />
            <div>
              <p className="lg:text-2xl text-sm text-[#4D4D4D] font-bold">
                {singleBidProposal?.truckerId?.fname}{" "}
                {singleBidProposal?.truckerId?.lname}
              </p>
              <p className="text-disableGray text-sm font-semibold">
                {singleBidProposal?.truckerId?.companyName}
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
            $ {singleBidProposal?.amount}
          </p>
        </div>
        <p className="text-sm text-disableGray">Trip detail</p>
        <div className="min-h-[8rem]">
          {/* departure */}
          <div className="flex justify-between relative">
            <div className="flex items-start md:w-auto w-2/3">
              <TfiLocationPin className="text-primaryBlue min-h-[1.5rem] min-w-[1.5rem]" />
              <div className="mx-2">
                <p className="lg:text-base text:sm font-semibold">
                  {singleBidProposal?.jobId?.departureLocation}{" "}
                </p>
              </div>
            </div>
            <div className="text-right md:text-base text-sm">
              <p>
                {moment(singleBidProposal?.jobId?.departureDate).format("ll")}
              </p>
              <p className="text-textColorGray lg:text-base text-sm ">
                {singleBidProposal?.jobId?.departureTime}
              </p>
            </div>
            {/* line */}
            <div className="absolute top-7 left-[11px] bottom-0 min-h-full h-auto w-0.5 bg-gray-400 rounded-sm"></div>
          </div>
          {/* arrival */}
          <div className="flex justify-between mt-8">
            <div className="flex items-start md:w-auto w-2/3">
              <TfiLocationPin className="text-greenColor min-h-[1.5rem] min-w-[1.5rem]" />
              <div className="mx-2">
                <p className="lg:text-base text-sm font-semibold">
                  {singleBidProposal?.jobId?.arrivalLocation}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p>
                {moment(singleBidProposal?.jobId?.arrivalDate).format("ll")}
              </p>
              <p className="text-textColorGray lg:text-base text-sm ">
                {singleBidProposal?.jobId?.arrivalTime}
              </p>
            </div>
          </div>
        </div>
        {/* check in  */}
        {/* <div className="flex justify-between relative">
          <div className="flex items-start">
            <BsCircleFill className="text-textColorGray text-sm ml-1.5 mt-0.5 pr-0.5" />
            <div className="mx-2">
              <p className="lg:text-base text-sm font-semibold">Check</p>
              <p className="text-textColorGray lg:text-base text-sm">
                Gary, IN
              </p>
            </div>
          </div>
          <div className="">
            <p className="flex justify-end">Mar 8</p>
            <p className="text-textColorGray lg:text-base text-sm ">12:00 am</p>
          </div>
          {/* line */}
        {/* <div className="absolute top-[21px] left-[11px] h-9 w-0.5 bg-gray-400 rounded-sm"></div>
        </div> */}

        {/* equipment */}
        <p className="text-textColorGray lg:text-base text-sm">
          Equipment needed
        </p>
        {singleBidProposal?.jobId?.equipment.length > 0 ? (
          singleBidProposal?.jobId?.equipment.map((equip) => (
            <div key={equip}>
              {equip.split(",").map((list, i) => (
                <p className="font-semibold flex items-center gap-2" key={i}>
                  <input type="checkbox" readOnly checked color="blue" />
                  <span>{list}</span>
                </p>
              ))}{" "}
            </div>
          ))
        ) : (
          <div>No Equipment</div>
        )}
        {/* endorment */}
        <p className="text-textColorGray lg:text-base text-sm">Endorsements</p>
        {singleBidProposal?.jobId?.endorsement.length > 0 ? (
          singleBidProposal?.jobId?.endorsement.map((endorsment) => (
            <div key={endorsment}>
              {endorsment.split(",").map((list, i) => (
                 <p className="font-semibold flex items-center gap-2" key={i}>
                 <input type="checkbox" readOnly checked color="blue" />
                 <span>{list}</span>
               </p>
              ))}
            </div>
          ))
        ) : (
          <div>No endrosment</div>
        )}
        {/* specification */}
        <p className="text-textColorGray lg:text-base text-sm">Specification</p>
        <div className="flex">
          <p className="text-sm font-semibold">
            {singleBidProposal?.jobId?.specification}
          </p>
        </div>
        {/* <p className="text-textColorGray lg:text-base text-sm">
          Delivery history
        </p> */}
        {/* {singleBidProposal?.jobId?.history.length > 0 ? (
          <div className="w-full border border-boxBroder rounded-xl base:p-4 p-2">
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
                <p className="text-textColorGray lg:text-base text-sm ">
                  7:00 am CST
                </p>
              </div>
              {/* line */}
        {/* <div className="absolute top-[26px] left-[11px] h-8 w-0.5 bg-gray-400 rounded-sm"></div>
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
            </p> */}
        {/* </div> */}
        {/* ) : (
          <div>No Histroy.</div>
        )} */}

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
