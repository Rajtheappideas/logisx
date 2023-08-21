import React from "react";

const Review = ({ setStep }) => {
  return (
    <div className="w-full space-y-2 md:space-y-4 md:text-base text-sm">
      <p className="Title">Review</p>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[#BDBDBD] font-medium">Name</p>
          <p className="font-medium">Kate Smith</p>
        </div>
        <p
          className="text-primaryBlue cursor-pointer font-semibold"
          onClick={() => {
            setStep(1);
          }}
        >
          EDIT
        </p>
      </div>
      <div>
        <p className="text-[#BDBDBD] font-medium">Company</p>
        <p className="font-medium">Company LLC</p>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[#BDBDBD] font-medium">Shipping manager’s name</p>
          <p className="font-medium">George Bell</p>
        </div>
        <p
          className="text-primaryBlue cursor-pointer font-semibold"
          onClick={() => {
            setStep(2);
          }}
        >
          EDIT
        </p>
      </div>
      <div>
        <p className="text-[#BDBDBD] font-medium">Shipping manager’s email</p>
        <p className="font-medium">Company</p>
      </div>
      <div>
        <p className="text-[#BDBDBD] font-medium">
          Shipping manager’s phone number
        </p>
        <p className="font-medium">123 - 456 -7890</p>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[#BDBDBD] font-medium">Terminal location</p>
          <p className="font-medium">
            Address line 1 <br />
            Chicago, IL 69070
          </p>
        </div>
        <p
          className="text-primaryBlue cursor-pointer font-semibold"
          onClick={() => {
            setStep(3);
          }}
        >
          EDIT
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-[#BDBDBD] font-medium">EIN number</p>
          <p className="font-medium">12 - 345678</p>
        </div>
        <p
          className="text-primaryBlue cursor-pointer font-semibold"
          onClick={() => {
            setStep(4);
          }}
        >
          EDIT
        </p>
      </div>
      <div>
        <p className="text-[#BDBDBD] font-medium">Accessible loading docks</p>
        <p className="font-medium">5</p>
      </div>
      <div>
        <p className="text-[#BDBDBD] font-medium">Loading dock numbers</p>
        <p className="font-medium">123456 , 123456 , 123456 , 123456</p>
      </div>
      <div>
        <p className="text-[#BDBDBD] font-medium">Photos of loading dock</p>
        <div className="flex gap-x-2">
          <img
            src={require("../../assets/images/desktop-wallpaper-printable-world-map-png-in-pdf-2021-world-map.jpg")}
            className="md:w-36 w-28 md:h-24 h-20 object-contain object-center rounded-lg"
          />
          <img
            src={require("../../assets/images/desktop-wallpaper-printable-world-map-png-in-pdf-2021-world-map.jpg")}
            className="md:w-36 w-28 md:h-24 h-20 object-contain object-center rounded-lg"
          />
        </div>
      </div>
      <div className="w-full flex justify-between items-center  md:flex-row flex-col gap-2">
        <button type="button" className="disable_button md:w-auto w-2/3">
          BACK
        </button>
        <button
          type="button"
          onClick={() => {
            setStep(6);
          }}
          className="blue_button md:w-auto w-2/3"
        >
          DONE
        </button>
      </div>
    </div>
  );
};

export default Review;
