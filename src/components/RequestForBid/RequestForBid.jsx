import React from "react";

const RequestForBid = ({
  setBidUploadType,
  bidUploadType,
  setActiveBidComponent,
}) => {
  return (
    <div>
      <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
        Bid upload
      </p>
      <label htmlFor="singlebid" className="form-control">
        <p
          onClick={() => setBidUploadType("single_bid")}
          className={` ${
            bidUploadType === "single_bid"
              ? "text-white bg-lightBlack"
              : "text-gray-500 bg-white"
          } w-full md:p-5 p-3 rounded-lg mt-3 cursor-pointer border border-gray-500 text-center`}
        >
          <input
            type="radio"
            id="singlebid"
            name="bid"
            defaultChecked
            className="mx-3"
          />
          Single Bid Upload
        </p>
      </label>
      <label htmlFor="multiplebid" className="form-control">
        <p
          onClick={() => setBidUploadType("multiple_bid")}
          className={` ${
            bidUploadType === "multiple_bid"
              ? "text-white bg-lightBlack"
              : "text-gray-500 bg-white"
          } w-full md:p-5 p-3 rounded-lg mt-3 cursor-pointer border border-gray-500 text-center`}
        >
          <input type="radio" id="multiplebid" name="bid" className="mx-3" />
          Multiple Bids Uploads
        </p>
      </label>
      <button
        className="uppercase blue_button float-right mt-2"
        onClick={() =>
          setActiveBidComponent(
            bidUploadType === "single_bid" ? "pick_up_info" : "upload_docs"
          )
        }
      >
        next
      </button>
    </div>
  );
};

export default RequestForBid;
