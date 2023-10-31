import React, { useState } from "react";
import PickUpinfoStep1 from "./PickUpinfoStep1";
import PickUpinfoStep2 from "./PickUpinfoStep2";
import PickUpinfoStep3 from "./PickUpinfoStep3";
import Review from "./Review";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const PickUpinfo = ({ setActiveBidComponent }) => {
  const [step, setStep] = useState(1);

  const dispatch = useDispatch();

  const { getValues, setValue, reset } = useForm({
    shouldFocusError: true,
    defaultValues: {
      email: "",
      password: "",
      fname: "",
      lname: "",
      companyName: "",
      shipperFname: "",
      shipperLname: "",
      shipperEmail: "",
      shipperPhone: "",
      location: "",
      latitude: "",
      longitude: "",
      ein: "",
      totalDocks: "",
      dockNumbers: "",
      photo: "",
      profile: "",
    },
  });

  return (
    <div className="w-full h-full md:space-y-3 space-y-2">
      {step === 1 && (
        <PickUpinfoStep1
          setStep={setStep}
          getValues={getValues}
          setValue={setValue}
          setActiveBidComponent={setActiveBidComponent}
        />
      )}
      {step === 2 && <PickUpinfoStep2 />}
      {step === 3 && <PickUpinfoStep3 />}
      {step === 4 && <Review setStep={setStep} />}
      {/* {step <= 3 && (
        <div className="w-full flex items-center justify-between md:flex-row flex-col gap-2">
          {step === 1 ? (
            <button
              onClick={() => setActiveBidComponent("bid_upload")}
              type="button"
              className="blue_button w-1/4 uppercase"
            >
              back
            </button>
          ) : (
            <button
              onClick={() => setStep(step - 1)}
              type="button"
              className="blue_button w-1/4 uppercase"
            >
              back
            </button>
          )}

          <div>{step} of 3</div>
          <button
            onClick={() => setStep(step + 1)}
            type="button"
            className="blue_button w-1/4 uppercase"
          >
            NEXT
          </button>
        </div>
      )} */}
      {/* {step === 4 && (
        <div className="w-full flex items-center justify-between flex-wrap gap-2">
          <button type="button" className="blue_button w-1/4 uppercase">
            back
          </button>

          <button type="button" className="blue_button w-1/4 uppercase">
            Done
          </button>
        </div>
      )} */}
    </div>
  );
};

export default PickUpinfo;
