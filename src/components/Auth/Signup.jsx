import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TellUsAbout from "../Signup/TellUsAbout";
import ShippingManager from "../Signup/ShippingManager";
import TerminalLocation from "../Signup/TerminalLocation";
import UploadDocs from "../Signup/UploadDocs";
import Review from "../Signup/Review";
import SignupComponent from "../Signup/SignupComponent";
import Success from "../ForgotPassword/Success";
import { handleChangeShowSignupProcess } from "../../redux/AuthSlice";

const Signup = ({ fcmToken, setOpenTab, FcmTokenLoading }) => {
  const [step, setStep] = useState(0);

  const { showSignupProcess } = useSelector((state) => state.root.auth);

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
      fcmToken: fcmToken,
      profile: "",
    },
  });

  const handleResetStates = () => {
    dispatch(handleChangeShowSignupProcess(false));
    setStep(0);
  };

  return (
    <div>
      {!showSignupProcess && step === 0 && (
        <SignupComponent
          setStep={setStep}
          setValue={setValue}
          getValues={getValues}
        />
      )}
      {showSignupProcess && step === 1 && (
        <TellUsAbout
          setStep={setStep}
          setValue={setValue}
          getValues={getValues}
          setOpenTab={setOpenTab}
        />
      )}
      {showSignupProcess && step === 2 && (
        <ShippingManager
          setStep={setStep}
          setValue={setValue}
          getValues={getValues}
        />
      )}
      {showSignupProcess && step === 3 && (
        <TerminalLocation
          setStep={setStep}
          setValue={setValue}
          getValues={getValues}
        />
      )}
      {showSignupProcess && step === 4 && (
        <UploadDocs
          setStep={setStep}
          setValue={setValue}
          getValues={getValues}
        />
      )}
      {showSignupProcess && step === 5 && (
        <Review
          reset={reset}
          setStep={setStep}
          getValues={getValues}
          fcmToken={fcmToken}
        />
      )}
      {showSignupProcess && step === 6 && (
        <Success
          buttonText="Complete"
          firstLinedescription="Thank you for submitting your account! We will review it and email you when "
          secondLineDescription="your account is ready."
          title="Account submitted"
          link="/auth"
          onClick={handleResetStates}
          setStep={setStep}
        />
      )}

      {/* <div className="w-full flex justify-between items-center md:flex-row flex-col mt-5 gap-2">
        <button
          type="button"
          onClick={() => {
            if (step === 1) {
              dispatch(handleChangeShowSignupProcess(false));
              setOpenTab("sign-up");
              setStep(step - 1);
            } else {
              setStep(step - 1);
            }
          }}
          className="blue_button md:w-auto"
        >
          BACK
        </button>
        <p className="text-xs md:text-base">{step} to 4</p>
        <button
          type="submit"
          // onClick={() => setStep(step + 1)}
          className="blue_button  md:w-auto"
        >
          NEXT
        </button>
      </div> */}
    </div>
  );
};

export default Signup;
