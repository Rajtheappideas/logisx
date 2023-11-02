import React from "react";
import success from "../../assets/images/Vector.svg";

const RequestBidSuccessPopup = ({ handleChangeComponent }) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black/20 z-10 backdrop-blur-sm"></div>
      <div className="fixed top-1/2 left-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-1/2 h-1/2 flex flex-col items-center justify-center p-10 space-y-3 bg-white rounded-3xl">
        <img src={success} alt="" className="h-[5vw] w-[5vw] mx-auto" />
        <p className="text-green-600 font-semibold  text-xl">
          Request published
        </p>
        <p className="text-textColorGray">Your bid was successfully created!</p>
        <button
          onClick={() => handleChangeComponent && handleChangeComponent()}
          className="blue_button tracking-wider"
        >
          complete
        </button>
      </div>
    </div>
  );
};

export default RequestBidSuccessPopup;
