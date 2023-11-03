import React, { memo } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeActiveComponent,
  handleChangeActiveHeader,
} from "../redux/globalStates";
import { RiHeartFill, RiHeartLine, RiTimerLine } from "react-icons/ri";
import {
  handelAddFavourite,
  handelRemoveFavourite,
  handleAddtoFavorites,
  handleChangeShowBidProposal,
  handleChangeShowJobDetails,
  handleRemoveFromFavorites,
  hanldeFindSingleBid,
  hanldeFindSingleJob,
} from "../redux/BidSlice";
import useAbortApiCall from "../hooks/useAbortApiCall";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";

const SingleJob = memo(({ setActiveBidId, jobDescription, data }) => {
  const [IsFavourite, setIsFavourite] = useState(false);

  const { activeHeader, activeComponent } = useSelector(
    (state) => state.root.globalStates
  );
  const { token } = useSelector((state) => state.root.auth);
  const { addFavoriteLoading, removeFavoriteLoading } = useSelector(
    (state) => state.root.bid
  );

  const { AbortControllerRef } = useAbortApiCall();

  const dispatch = useDispatch();

  const handleDispatch = () => {
    if (
      activeComponent === "active jobs" ||
      activeComponent === "completed jobs"
    ) {
      dispatch(hanldeFindSingleJob({ jobStatus: "in-transit", id: data?._id }));
      dispatch(handleChangeShowJobDetails(true));
    } else if (activeComponent === "pending bids") {
      dispatch(handleChangeShowBidProposal(true));
      setActiveBidId(data?._id);
    } else if (activeComponent === "favorites") {
      if (data?.status === "pending") {
        dispatch(handleChangeActiveComponent("pending bids"));
        dispatch(handleChangeActiveHeader("bids"));
        dispatch(hanldeFindSingleBid(data?._id));
        dispatch(handleChangeShowBidProposal(true));
      } else if (data?.status === "in-transit") {
        dispatch(handleChangeActiveComponent("active jobs"));
        dispatch(handleChangeActiveHeader("jobs"));
        dispatch(
          hanldeFindSingleJob({ id: data?._id, jobStatus: data?.status })
        );
        dispatch(handleChangeShowJobDetails(true));
      } else if (data?.status === "complete") {
        dispatch(handleChangeActiveComponent("completed jobs"));
        dispatch(handleChangeActiveHeader("jobs"));
        dispatch(
          hanldeFindSingleJob({ id: data?._id, jobStatus: data?.status })
        );
        dispatch(handleChangeShowJobDetails(true));
      }
    }
  };

  const handleAddAndRemoveFavourite = () => {
    if (removeFavoriteLoading || addFavoriteLoading) return;
    if (IsFavourite) {
      toast.loading("Removing...");
      const response = dispatch(
        handleRemoveFromFavorites({
          id: data?._id,
          token,
          signal: AbortControllerRef,
        })
      );
      if (response) {
        response.then((res) => {
          if (res?.payload?.status === "success") {
            toast.remove();
            toast.success(data?.bidId + " " + "remove from favourites.");
            dispatch(handelRemoveFavourite(data?._id));
            setIsFavourite(false);
          }
        });
      }
    } else {
      toast.loading("Adding...");
      const response = dispatch(
        handleAddtoFavorites({
          id: data?._id,
          token,
          signal: AbortControllerRef,
        })
      );
      if (response) {
        response.then((res) => {
          if (res?.payload?.status === "success") {
            toast.remove();
            toast.success(data?.bidId + " " + "Added to favourites.");
            dispatch(handelAddFavourite(data?._id));
            setIsFavourite(true);
          }
        });
      }
    }
  };

  useEffect(() => {
    setIsFavourite(data?.isFavourite);
  }, []);

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
          <button type="button" onClick={handleAddAndRemoveFavourite}>
            {IsFavourite ? (
              <RiHeartFill size={30} color="red" />
            ) : (
              <RiHeartLine size={30} />
            )}
          </button>
        </div>
      </div>
      <div className="relative w-full">
        {/* departure */}
        <div className="flex justify-between relative w-full">
          <div className="flex items-start w-2/3">
            <TfiLocationPin className="text-primaryBlue min-h-[1.5rem] min-w-[1.5rem]" />
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
        </div>
        {/*vertical line */}
        <div className="absolute z-0 left-[11px] top-7 bottom-9 h-auto border-[1px] w-0.5 bg-textLightGray rounded-sm"></div>
        {/* arrival */}
        <div className="flex justify-between items-center w-full mt-5">
          <div className="flex items-center w-2/3">
            <TfiLocationPin className="text-greenColor min-h-[1.5rem] min-w-[1.5rem] relative z-0 bg-white" />
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
      </div>
      {/* status */}
      <div className="flex items-center">
        <p className="text-lg font-semibold">Status :</p>
        <span
          className={`${
            data?.status === "in-transit"
              ? "bg-primaryBlue"
              : data?.status === "pending"
              ? "bg-primaryBlue"
              : data?.status === "complete"
              ? "bg-greenColor"
              : data?.status === "cancelled"
              ? "bg-gray-300"
              : ""
          }
          capitalize text-white font-medium text-center md:w-32 md:ml-2 ml-1 w-24 md:h-10 md:leading-10 align-middle h-9 leading-9 rounded-3xl`}
        >
          {data?.status}
        </span>
      </div>

      {/* description */}
      <p className="text-sm text-gray-500 line-clamp-2">
        {data?.jobDescription}
      </p>
      <p className="text-sm text-gray-500 line-clamp-2">{data?._id}</p>
      {/* amount */}
      <div className="flex items-center justify-between">
        <p className="lg:text-2xl text-lg font-semibold text-textPurple">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          }).format(parseInt(data?.price))}
        </p>
        {data?.status === "cancelled" ? (
          <span className=" uppercase tracking-wide bg-red-50 text-red-500 rounded-lg p-1 w-fit">
            Cancelled
          </span>
        ) : (
          <button
            className="blue_button uppercase tracking-wide"
            onClick={() => handleDispatch()}
          >
            view {data?.status === "pending" && "Bids"}
          </button>
        )}
      </div>
    </div>
  );
});

export default SingleJob;
