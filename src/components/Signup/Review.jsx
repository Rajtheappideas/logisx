import React, { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleChangeShowSignupProcess,
  handleRegisterUser,
} from "../../redux/AuthSlice";
import useAbortApiCall from "../../hooks/useAbortApiCall";
import bcrypt from "bcryptjs";
import { toast } from "react-hot-toast";

const Review = memo(({ setStep, getValues, fcmToken, reset }) => {
  const {
    email,
    password,
    fname,
    lname,
    companyName,
    shipperFname,
    shipperLname,
    shipperEmail,
    shipperPhone,
    location,
    latitude,
    longitude,
    ein,
    totalDocks,
    dockNumbers,
    photo,
    profile,
  } = getValues();

  const [displayImages, setDisplayImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { AbortControllerRef, abortApiCall } = useAbortApiCall();

  useEffect(() => {
    let imageUrls = [];
    for (const iterator of photo) {
      const objectUrl = window.URL.createObjectURL(iterator);
      imageUrls.push(objectUrl);
    }
    setDisplayImages(imageUrls);
  }, []);

  const handleSubmit = () => {
    setLoading(true);
    const response = dispatch(
      handleRegisterUser({
        email,
        password,
        fname,
        lname,
        companyName,
        shipperFname,
        shipperLname,
        shipperEmail,
        shipperPhone,
        location,
        latitude,
        longitude,
        ein,
        totalDocks,
        dockNumbers,
        photo,
        profile: null,
        fcmToken,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response
        .then((res) => {
          if (res.payload.status === "success") {
            toast.success("Account created successfully");
            setStep(6);
            reset();
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <div className="w-full space-y-2 md:space-y-4 md:text-base text-sm">
      <p className="Title">Review</p>
      {/* name */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[#BDBDBD] font-medium">Name</p>
          <p className="font-medium">
            {fname} {lname}
          </p>
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
      {/* company */}
      <div>
        <p className="text-[#BDBDBD] font-medium">Company</p>
        <p className="font-medium">{companyName}</p>
      </div>
      {/* company */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[#BDBDBD] font-medium">Shipping manager’s name</p>
          <p className="font-medium">
            {shipperFname} {shipperLname}
          </p>
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
      {/* shipping */}
      <div>
        <p className="text-[#BDBDBD] font-medium">Shipping manager’s email</p>
        <p className="font-medium">{shipperEmail}</p>
      </div>
      <div>
        <p className="text-[#BDBDBD] font-medium">
          Shipping manager’s phone number
        </p>
        <p className="font-medium">{shipperPhone}</p>
      </div>
      {/* terminal location */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[#BDBDBD] font-medium">Terminal location</p>
          <p className="font-medium">{location}</p>
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
      {/* ein number */}
      <div className="flex justify-between">
        <div>
          <p className="text-[#BDBDBD] font-medium">EIN number</p>
          <p className="font-medium">{ein}</p>
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
        <p className="font-medium">{totalDocks}</p>
      </div>
      <div>
        <p className="text-[#BDBDBD] font-medium">Loading dock numbers</p>
        <p className="font-medium">{dockNumbers}</p>
      </div>
      <div>
        <p className="text-[#BDBDBD] font-medium">Photos of loading dock</p>
        <div className="flex md:gap-3 gap-2 flex-wrap items-center justify-start">
          {photo.length > 0 ? (
            displayImages.map((image) => (
              <img
                src={image}
                className="lg:w-36 lg:h-24 w-28 h-20 object-contain object-center rounded-lg border border-gray-300 p-1"
                key={image}
              />
            ))
          ) : (
            <div>No photos</div>
          )}
        </div>
      </div>
      {/* btns */}
      <div className="w-full flex justify-between items-center  md:flex-row flex-col gap-2">
        <button
          type="button"
          disabled={loading}
          className="disable_button md:w-auto w-2/3"
        >
          BACK
        </button>
        <button
          type="button"
          onClick={() => {
            handleSubmit();
          }}
          className="blue_button md:w-auto w-2/3 uppercase"
          disabled={loading}
        >
          {loading ? "Signing up..." : "DONE"}
        </button>
      </div>
    </div>
  );
});

export default Review;
