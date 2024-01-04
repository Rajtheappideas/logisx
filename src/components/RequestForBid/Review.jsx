import moment from "moment";
import React, { useEffect } from "react";
import Success from "../ForgotPassword/Success";
import RequestBidSuccessPopup from "../Bids/RequestBidSuccessPopup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetPendingBids, handleRequestBid } from "../../redux/BidSlice";
import useAbortApiCall from "../../hooks/useAbortApiCall";
import toast from "react-hot-toast";

const Review = ({ setStep, step, getValues, setShowSuccessPopup }) => {
  const { createBidLoading } = useSelector((s) => s.root.bid);
  const { token } = useSelector((s) => s.root.auth);

  const dispatch = useDispatch();

  const { AbortControllerRef, abortApiCall } = useAbortApiCall();

  const {
    departureLocation,
    departureLat,
    departureLng,
    arrivalLocation,
    arrivalLat,
    arrivalLng,
    departureDate,
    departureTime,
    arrivalDate,
    arrivalTime,
    emptyAtBidding,
    jobDescription,
    receiverName,
    receiverAddress,
    receiverEmail,
    receiverPhone,
    bidExpriry,
    price,
    equipment,
    endorsement,
    specification,
    loadNotes,
    poNumber,
    refrenceNumber,
    weight,
  } = getValues();

  const handleCreateRequestForBid = () => {
    const response = dispatch(
      handleRequestBid({
        data: getValues(),
        token,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res?.payload?.status === "success") {
          setShowSuccessPopup(true);
          dispatch(handleGetPendingBids({ token, signal: AbortControllerRef }));
        }
      });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full md:space-y-5 space-y-3 md:text-base text-sm">
      <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
        Review
      </p>
      {/* step 1 */}
      <div className="md:space-y-3 space-y-1">
        {/* Departure location */}
        <div>
          <div className="flex justify-between items-start">
            <p className="text-sm text-disableGray font-semibold">
              Departure location
            </p>
            <p
              onClick={() => setStep(1)}
              className="text-sm text-primaryBlue font-semibold cursor-pointer"
            >
              EDIT
            </p>
          </div>
          <p>{departureLocation}</p>
        </div>
        {/* Arrival location */}
        <div>
          <p className="text-sm text-disableGray font-semibold">
            Arrival location
          </p>
          <p>{arrivalLocation}</p>
        </div>
        {/* Delivery pick-up & delivery date */}
        <div className="grid place-items-start items-start w-full md:grid-cols-2">
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Departure pick-up date
            </p>
            <p className="font-semibold">
              {moment(departureDate).format("LL")}
            </p>
          </div>
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Departure pick-up time
            </p>
            <p className="font-semibold">{departureTime}</p>
          </div>
        </div>
        {/* arrival pick-up & delivery date*/}
        <div className="grid place-items-start items-start w-full md:grid-cols-2">
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Arrival delivery date
            </p>
            <p className="font-semibold">{moment(arrivalDate).format("LL")}</p>
          </div>
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Arrival delivery time
            </p>
            <p className="font-semibold">{arrivalTime}</p>
          </div>
        </div>
        {/* Empty at time of pick up? */}
        <div>
          <p className="text-sm text-disableGray font-semibold">
            Empty at time of pick up?
          </p>
          <p>{emptyAtBidding}</p>
        </div>
        {/* Job description */}
        <div>
          <p className="text-sm text-disableGray font-semibold">
            Job description
          </p>
          <p>{jobDescription}</p>
        </div>
        {/* Bid ends */}
        <div>
          <p className="text-sm text-disableGray font-semibold">Bid ends</p>
          <p className="font-semibold">{moment(bidExpriry).format("LL")}</p>
        </div>
        {/* Receiver’s name & address */}
        <div className="grid place-items-start items-start w-full md:grid-cols-2">
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Receiver’s name
            </p>
            <p>{receiverName}</p>
          </div>
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Receiver’s address
            </p>
            <p className="mx-auto">{receiverAddress}</p>
          </div>
        </div>
        {/* Receiver’s phone number  & email address */}
        <div className="grid place-items-start items-start w-full md:grid-cols-2">
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Receiver’s phone number
            </p>
            <p>{receiverPhone}</p>
          </div>
          <div>
            <p className="text-sm text-disableGray font-semibold">
              Receiver’s email address
            </p>
            <p className=" mx-auto">{receiverEmail}</p>
          </div>
        </div>
        {/* price */}
        <div>
          <p className="text-sm text-disableGray font-semibold">Price</p>
          <p className="font-semibold">{price}</p>
        </div>
      </div>
      {/* step 2 */}
      <div className="md:space-y-3 space-y-1">
        <div className="space-y-1">
          <div className="flex justify-between">
            <p className="text-sm text-disableGray font-semibold">
              Equipment needed
            </p>
            <p
              onClick={() => setStep(2)}
              className="text-sm text-primaryBlue font-semibold cursor-pointer"
            >
              EDIT
            </p>
          </div>
          {equipment.map((list, i) => (
            <p key={i}>{list}</p>
          ))}
        </div>
        <div className="space-y-1">
          <p className="text-sm text-disableGray font-semibold">Endorsements</p>
          {endorsement.length > 0
            ? endorsement.map((list, i) => <p key={i}>{list}</p>)
            : "-"}
        </div>
        <div className="space-y-1">
          <p className="text-sm text-disableGray font-semibold">
            Weight
          </p>
          <p>{weight}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-disableGray font-semibold">
            Specification
          </p>
          <p>{specification !== "" ? specification : "-"}</p>
        </div>
      </div>
      {/* step 3 */}
      <div className="md:space-y-3 space-y-1">
        <div>
          <div className="flex justify-between">
            <p className="text-sm text-disableGray font-semibold">Load notes</p>
            <p
              onClick={() => setStep(3)}
              className="text-sm text-primaryBlue font-semibold cursor-pointer"
            >
              EDIT
            </p>
          </div>
          <p>{loadNotes !== "" ? loadNotes : "-"}</p>
        </div>
        <div>
          <p className="text-sm text-disableGray font-semibold">P.O. number</p>
          <p className="font-semibold">{poNumber}</p>
        </div>
        <div>
          <p className="text-sm text-disableGray font-semibold">
            Reference number
          </p>
          <p>{refrenceNumber !== "" ? refrenceNumber : "-"}</p>
        </div>
      </div>
      {/* btns */}
      <div className="w-full col-span-full flex items-center justify-between md:flex-row flex-col md:gap-0 gap-2">
        <button
          onClick={() => setStep(step - 1)}
          type="button"
          className={`blue_button w-1/4 uppercase  ${
            createBidLoading && "cursor-not-allowed opacity-40"
          } `}
          disabled={createBidLoading}
        >
          back
        </button>

        <button
          type="button"
          onClick={() => handleCreateRequestForBid()}
          className={`blue_button w-1/4 uppercase  ${
            createBidLoading && "cursor-not-allowed opacity-40"
          } `}
          disabled={createBidLoading}
        >
          {createBidLoading ? "Creating Bid..." : "Done"}
        </button>
      </div>
    </div>
  );
};

export default Review;
