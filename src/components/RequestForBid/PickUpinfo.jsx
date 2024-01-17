import React, { useEffect, useState } from "react";
import PickUpinfoStep1 from "./PickUpinfoStep1";
import PickUpinfoStep2 from "./PickUpinfoStep2";
import PickUpinfoStep3 from "./PickUpinfoStep3";
import Review from "./Review";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import RequestBidSuccessPopup from "../Bids/RequestBidSuccessPopup";
import {
  handleChangeActiveComponent,
  handleGetAddress,
  handleLogoutFromAllTabs,
} from "../../redux/globalStates";
import { handleLogout } from "../../redux/AuthSlice";
import toast from "react-hot-toast";

const PickUpinfo = ({ setActiveBidComponent }) => {
  const [step, setStep] = useState(1);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [selectedFromDropdownArrival, setSelectedFromDropdownArrival] =
    useState(null);
  const [selectedFromDropdownDeparture, setSelectedFromDropdownDeparture] =
    useState(null);

  const { token } = useSelector((s) => s.root.auth);

  const dispatch = useDispatch();

  const { getValues, setValue, resetField, clearErrors, reset } = useForm({
    shouldFocusError: true,
    defaultValues: {
      departureLocation: "",
      departureLat: "",
      departureLng: "",
      arrivalLocation: "",
      arrivalLat: "",
      arrivalLng: "",
      departureDate: "",
      departureTime: "",
      arrivalDate: "",
      arrivalTime: "",
      emptyAtBidding: "",
      jobDescription: "",
      receiverName: "",
      receiverAddress: "",
      receiverEmail: "",
      receiverPhone: "",
      bidExpriry: "",
      price: "",
      equipment: "",
      endorsement: "",
      specification: "",
      loadNotes: "",
      poNumber: "",
      refrenceNumber: "",
      weight: "",
    },
  });

  const handleChangeComponent = () => {
    dispatch(handleChangeActiveComponent("pending bids"));
  };

  const handleFetchAddress = () => {
    const response = dispatch(handleGetAddress({ token }));
    if (response) {
      response.then((res) => {
        if (
          res?.payload?.status === "fail" &&
          (res?.payload?.code === 423 ||
            (res?.payload?.code === 400 &&
              res?.payload?.message === "Please login first."))
        ) {
          window.localStorage.clear();
          toast.error(res?.payload?.message);
          dispatch(handleLogout());
          dispatch(handleLogoutFromAllTabs());
        }
      });
    }
  };

  useEffect(() => {
    handleFetchAddress();
  }, []);

  return (
    <div className="w-full h-full md:space-y-3 space-y-2">
      {step === 1 && (
        <PickUpinfoStep1
          setStep={setStep}
          getValues={getValues}
          setValue={setValue}
          setActiveBidComponent={setActiveBidComponent}
          clearErrors={clearErrors}
          reset={reset}
          setSelectedFromDropdownArrival={setSelectedFromDropdownArrival}
          selectedFromDropdownArrival={selectedFromDropdownArrival}
          setSelectedFromDropdownDeparture={setSelectedFromDropdownDeparture}
          selectedFromDropdownDeparture={selectedFromDropdownDeparture}
        />
      )}
      {step === 2 && (
        <PickUpinfoStep2
          setStep={setStep}
          getValues={getValues}
          setValue={setValue}
          setActiveBidComponent={setActiveBidComponent}
          clearErrors={clearErrors}
          step={step}
        />
      )}
      {step === 3 && (
        <PickUpinfoStep3
          setStep={setStep}
          getValues={getValues}
          setValue={setValue}
          setActiveBidComponent={setActiveBidComponent}
          clearErrors={clearErrors}
          step={step}
        />
      )}
      {step === 4 && (
        <Review
          setStep={setStep}
          step={step}
          getValues={getValues}
          setShowSuccessPopup={setShowSuccessPopup}
        />
      )}

      {showSuccessPopup && (
        <RequestBidSuccessPopup handleChangeComponent={handleChangeComponent} />
      )}
    </div>
  );
};

export default PickUpinfo;
