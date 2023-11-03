import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const UploadBidDocs = ({
  setShowUploadFile,
  setActiveBidComponent,
  setBidUploadType,
}) => {
  return (
    <div className="w-full md:space-y-5 space-y-3">
      <div className="flex items-center text-primaryBlue font-semibold justify-between">
        <div
          onClick={() => {
            setActiveBidComponent("bid_upload");
            setBidUploadType("single_bid");
          }}
          className="md:text-2xl text-lg cursor-pointer flex items-center text-primaryBlue font-semibold"
        >
          <BsArrowLeft className="inline-block md:text-2xl text-lg mr-2 mt-1" />{" "}
          Multiple Bids Uploads
        </div>
        <div>
          <a
            href="https://logisx.uc.r.appspot.com/Mulitple%20bid%20request%20-%20sample.csv"
            download
            className="hover:underline"
          >
            Download Sample Format
          </a>
        </div>
      </div>
      <div className="w-full max-h-fit flex items-center justify-center flex-col">
        <img
          src={require("../../assets/images/upload_docs.png")}
          alt=""
          className="md:h-fit md:w-fit h-60 w-60 object-contain"
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
