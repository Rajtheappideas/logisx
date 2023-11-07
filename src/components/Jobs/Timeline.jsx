import React, { useEffect, useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import UploadBills from "./UploadBills";
import { imageUrl } from "../../Baseurl";
import moment from "moment";
import { useJsApiLoader } from "@react-google-maps/api";
import LiveTrackMap from "../LiveTrackMap";
import { socket } from "../../Socket";
import { handleGetJobDetails } from "../../redux/BidSlice";
import useAbortApiCall from "../../hooks/useAbortApiCall";

const libraries = ["places"];

const Timeline = () => {
  const [error, setError] = useState(null);
  const [jobStatus, setJobStatus] = useState("");

  const { singleJobDetails } = useSelector((s) => s.root.bid);

  const [showUploadBillModal, setShowUploadBillModal] = useState(false);
  const [center, setCenter] = useState({
    lat: 18.52043,
    lng: 73.856743,
  });

  const { token } = useSelector((s) => s.root.auth);
  const { activeComponent } = useSelector((state) => state.root.globalStates);
  const { AbortControllerRef } = useAbortApiCall();

  const dispatch = useDispatch();

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });

  function handleShowJobStatus() {
    if (
      singleJobDetails?.jobStatus === "start" ||
      singleJobDetails?.jobStatus === "wayToPickUp"
    ) {
      return " Trucker en route to pick-up";
    } else if (singleJobDetails?.jobStatus === "truckerArrived") {
      return "Trucker Arrived";
    } else if (singleJobDetails?.jobStatus === "loading") {
      return "loading in progress";
    } else if (singleJobDetails?.jobStatus === "loadingComplete") {
      return "loading completed";
    } else if (singleJobDetails?.jobStatus === "wayToDelivery") {
      return "Trucker en route to delivery";
    } else if (
      singleJobDetails?.jobStatus === "unloading" ||
      singleJobDetails?.jobStatus === "unloadingComplete"
    ) {
      return "unloadin in progress";
    } else if (singleJobDetails?.jobStatus === "complete") {
      return "completed";
    }
  }

  const handleChangeJobStatusOnTruckerArrived = () => {
    if (singleJobDetails?.jobStatus === "truckerArrived") {
      socket.emit("jobStatus", {
        jobId: singleJobDetails?._id,
        jobStatus: "loading",
      });
      dispatch(
        handleGetJobDetails({
          token,
          id: singleJobDetails?._id,
          signal: AbortControllerRef,
        })
      );
    }
    // socket.emit("jobStatus", {
    //   jobId: singleJobDetails?._id,
    //   jobStatus: "loading",
    // });
    // dispatch(
    //   handleGetJobDetails({
    //     token,
    //     id: singleJobDetails?._id,
    //     signal: AbortControllerRef,
    //   })
    // );
  };

  // useEffect(() => {
  //   socket.on("JobStatus", (data) => {
  //     console.log(data);
  //   });
  // }, []);

  return (
    <>
      <UploadBills
        setShowUploadBillModal={setShowUploadBillModal}
        showUploadBillModal={showUploadBillModal}
      />
      <div className="w-full md:space-y-4 space-y-2">
        {loadError !== undefined && isLoaded ? (
          <div className="w-full text-center text-2xl font-semibold p-4 mx-auto text-red-500">
            {loadError.message}
          </div>
        ) : !isLoaded && loadError === undefined ? (
          <div className="w-full text-center text-2xl font-semibold p-4 mx-auto">
            Loading Map...
          </div>
        ) : (
          <LiveTrackMap
            setError={setError}
            setCenter={setCenter}
            center={center}
          />
        )}
        {/* error */}
        {error && (
          <div className="text-center capitalize w-full text-red-400 font-medium text-lg">
            {error}
          </div>
        )}
        <div className="flex justify-between items-center">
          {/* trucker info */}
          <div className="flex items-center">
            <img
              src={imageUrl.concat(
                singleJobDetails?.acceptedBid?.truckerId?.profile
              )}
              alt={singleJobDetails?.acceptedBid?.truckerId?.lname}
              className="md:w-20 md:h-20 h-12 w-12 rounded-full object-contain object-center"
            />
            <div className="mx-4">
              <p className="font-semibold">
                {singleJobDetails?.acceptedBid?.truckerId?.fname}{" "}
                {singleJobDetails?.acceptedBid?.truckerId?.lname}
              </p>
              <p className="text-textColorGray text-sm">
                {singleJobDetails?.acceptedBid?.truckerId?.companyName}
              </p>
            </div>
          </div>
          {/* price */}
          <p className="text-textPurple font-semibold md:text-2xl text-lg">
            ${singleJobDetails?.amount}
          </p>
        </div>
        {/* status */}
        <div className="flex justify-between items-center md:text-xl text-sm">
          <p className="font-bold">
            Status :&nbsp;
            {activeComponent === "completed jobs" ? (
              <span className="text-primaryBlue font-bold">Completed</span>
            ) : (
              <span className="text-primaryBlue font-bold capitalize">
                {/* {singleJobDetails?.jobStatus} */}
                {handleShowJobStatus()}
              </span>
            )}
          </p>
          {/* btn for start loading */}
          <button
            className={`blue_button text-base ${
              singleJobDetails?.jobStatus !== "truckerArrived" && "hidden"
            } `}
            onClick={() => handleChangeJobStatusOnTruckerArrived()}
          >
            Start Loading
          </button>
          {/* btn for comlpete loading */}
          <button
            className={`blue_button text-base ${
              singleJobDetails?.jobStatus !== "loading" && "hidden"
            } `}
            onClick={() => setShowUploadBillModal(true)}
          >
            Loading Complete
          </button>
          {/* btn for default */}
          {/* <button
            className={`blue_button text-base `}
            onClick={() => handleChangeJobStatusOnTruckerArrived()}
          >
            BUtton
          </button> */}
        </div>
        <p className="text-textColorGray text-sm">Trip detail</p>
        {/* trip details */}
        <div className="min-h-[8rem]">
          {/* departure */}
          <div className="flex justify-between relative">
            <div className="flex items-start md:w-auto w-2/3">
              <TfiLocationPin className="text-primaryBlue min-h-[1.5rem] min-w-[1.5rem]" />
              <div className="mx-2">
                <p className="lg:text-base text:sm font-semibold">
                  {singleJobDetails?.departureLocation}{" "}
                </p>
              </div>
            </div>
            <div className="text-right md:text-base text-sm">
              <p>{moment(singleJobDetails?.departureDate).format("ll")}</p>
              <p className="text-textColorGray lg:text-base text-sm ">
                {singleJobDetails?.departureTime}
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
                  {singleJobDetails?.arrivalLocation}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p>{moment(singleJobDetails?.arrivalDate).format("ll")}</p>
              <p className="text-textColorGray lg:text-base text-sm ">
                {singleJobDetails?.arrivalTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
