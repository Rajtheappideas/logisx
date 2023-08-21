import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const UploadBidDocs = ({
  setShowUploadFile,
  setActiveBidComponent,
  setBidUploadType,
}) => {
  return (
    <div className="w-full min-h-screen">
      <p
        onClick={() => {
          setActiveBidComponent("bid_upload");
          setBidUploadType("single_bid");
        }}
        className="md:text-2xl text-lg cursor-pointer flex items-center text-primaryBlue font-semibold"
      >
        <BsArrowLeft className="inline-block md:text-2xl text-lg mr-2" />{" "}
        Multiple Bids Uploads
      </p>
      <div className="w-full min-h-screen flex items-center justify-center flex-col">
        <img
          src={require("../../assets/images/upload_docs.png")}
          alt=""
          className="h-fit w-fit object-contain"
        />
        <button
          className="uppercase blue_button float-right mt-2"
          onClick={() => setShowUploadFile(true)}
        >
          + Add new
        </button>
      </div>
    </div>
  );
};

export default UploadBidDocs;
