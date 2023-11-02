import React, { useState } from "react";
import PickUpinfoStep1 from "./PickUpinfoStep1";
import PickUpinfoStep2 from "./PickUpinfoStep2";
import PickUpinfoStep3 from "./PickUpinfoStep3";
import Review from "./Review";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import RequestBidSuccessPopup from "../Bids/RequestBidSuccessPopup";
import { handleChangeActiveComponent } from "../../redux/globalStates";

const PickUpinfo = ({ setActiveBidComponent }) => {
  const [step, setStep] = useState(1);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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
    },
  });

  const handleChangeComponent = () => {
    dispatch(handleChangeActiveComponent("pending bids"));
  };

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
