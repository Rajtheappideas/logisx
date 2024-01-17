import React, { useState } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import CounterOfferModal from "../CounterOfferModal";
import { useDispatch, useSelector } from "react-redux";
import CancelBidModal from "../CancelBidModal";
import moment from "moment/moment";
import { imageUrl } from "../../Baseurl";
import {
  handleAcceptBid,
  handleCancelBid,
  handleChangeShowBidProposal,
  handleGetPendingBids,
} from "../../redux/BidSlice";
import useAbortApiCall from "../../hooks/useAbortApiCall";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Details = ({ singleBidProposal, setActiveBidId }) => {
  const [showCounterOfferModal, setShowCounterOfferModal] = useState(false);
  const [showCancelBidModal, setShowCancelBidModal] = useState(false);

  const { activeComponent } = useSelector((state) => state.root.globalStates);
  const { cancelBidLoading, acceptBidLoading } = useSelector(
    (state) => state.root.bid
  );
  const { token } = useSelector((state) => state.root.auth);

  const { abortApiCall, AbortControllerRef } = useAbortApiCall();

  const dispatch = useDispatch();

  const handlecancelBid = () => {
    if (cancelBidLoading) return;
    if (window.confirm("Are you sure?")) {
      toast.loading("Cancelling...");
      const response = dispatch(
        handleCancelBid({
          jobId: singleBidProposal?.jobId?._id,
          token,
          signal: AbortControllerRef,
        })
      );
      if (response) {
        response.then((res) => {
          if (res?.payload?.status === "success") {
            toast.remove();
            toast.success("Bid canceled successfully.");
            dispatch(
              handleGetPendingBids({ token, signal: AbortControllerRef })
            );
            setTimeout(() => {
              setActiveBidId(null);
              dispatch(handleChangeShowBidProposal(false));
            }, 500);
          }
        });
      }
    }
  };

  const handleacceptBid = () => {
    if (acceptBidLoading) return;
    toast.loading("Accepting...");
    const response = dispatch(
      handleAcceptBid({
        bidId: singleBidProposal?._id,
        token,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res?.payload?.status === "success") {
          toast.remove();
          toast.success("Bid accepted successfully.");
          setTimeout(() => {
            setActiveBidId(null);
            dispatch(handleChangeShowBidProposal(false));
          }, 500);
        }
      });
    }
  };

  // useEffect(() => {
  //   // return () => abortApiCall();
  // }, []);


  return (
    <>
      <CounterOfferModal
        setShowCounterOfferModal={setShowCounterOfferModal}
        showCounterOfferModal={showCounterOfferModal}
        singleBidProposal={singleBidProposal}
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
          {!singleBidProposal?.isAccepted ? (
            <div>
              {singleBidProposal?.counterOffer != 0 &&
              singleBidProposal?.isCounterOffer ? (
                <div className="font-semibold uppercase md:text-base text-sm w-auto md:p-2 p-1 rounded-lg border border-primaryBlue text-primaryBlue text-center">
                  your counter offer: ${singleBidProposal?.counterOffer}
                </div>
              ) : (
                <div
                  onClick={() => setShowCounterOfferModal(true)}
                  className="cursor-pointer font-semibold uppercase md:text-base text-sm lg:w-60 md:w-40 md:p-3 p-1 rounded-lg transition duration-100 active:scale-95 hover:bg-primaryBlue hover:text-white border border-primaryBlue text-primaryBlue text-center"
                >
                  counter offer
                </div>
              )}
            </div>
          ) : (
            <div>
              {singleBidProposal?.counterOffer != 0 &&
              singleBidProposal?.isCounterOffer ? (
                <div className="font-semibold uppercase md:text-base text-sm w-auto md:p-2 p-1 rounded-lg border border-primaryBlue text-primaryBlue text-center">
                  your counter offer: ${singleBidProposal?.counterOffer}
                </div>
              ) : (
                <div className=""></div>
              )}
            </div>
          )}
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
        {singleBidProposal?.jobId?.equipment[0] !== "" ? (
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
        {singleBidProposal?.jobId?.endorsement[0] !== "" ? (
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
        <p className="text-sm font-semibold">
          {singleBidProposal?.jobId?.specification !== ""
            ? singleBidProposal?.jobId?.specification
            : "-"}
        </p>
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
        {activeComponent === "pending bids" &&
          singleBidProposal?.bidStatus !== "accepted" &&
          !singleBidProposal?.isAccepted &&
          !singleBidProposal?.isDenied && (
            <div className="flex w-full justify-end items-center gap-x-2">
              <button
                onClick={() => handlecancelBid()}
                className="red_button_outline"
                disabled={cancelBidLoading || acceptBidLoading}
              >
                Cancel bid
              </button>
              <button
                disabled={cancelBidLoading || acceptBidLoading}
                className={`blue_button ${
                  acceptBidLoading && "cursor-not-allowed opacity-50"
                }`}
                onClick={() => handleacceptBid()}
              >
                Accept
              </button>
            </div>
          )}
      </div>
    </>
  );
};

export default Details;
