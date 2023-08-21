import React, { useEffect, useState } from "react";
import Background from "../assets/images/BG.png";
import Logo from "../assets/images/logisX-2-png 3.svg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Signin from "../components/Auth/Signin";
import Signup from "../components/Auth/Signup";
import TellUsAbout from "../components/Signup/TellUsAbout";
import { useDispatch, useSelector } from "react-redux";
import ShippingManager from "../components/Signup/ShippingManager";
import TerminalLocation from "../components/Signup/TerminalLocation";
import UploadDocs from "../components/Signup/UploadDocs";
import Review from "../components/Signup/Review";
import Success from "../components/ForgotPassword/Success";
import { handleChangeShowSignupProcess } from "../redux/globalStates";

const Auth = () => {
  const [openTab, setOpenTab] = useState("sign-in");
  const [step, setStep] = useState(1);

  const { showSignupProcess } = useSelector((state) => state.root.globalStates);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (user !== null) {
  //     toast(t("You already logged in."), { duration: 3000 });
  //     navigate("/");
  //   }
  //   return () => {
  //     abortApiCall();
  //   };
  // }, []);

  const handleResetStates = () => {
    dispatch(handleChangeShowSignupProcess(false));
  };

  return (
    <>
      <Helmet>
        <title> {openTab} | Logisx</title>
      </Helmet>
      <div
        className="w-full md:pb-10 pb-20 min-h-screen hide_scrollbar overflow-y-scroll flex items-center justify-center flex-col lg:gap-y-3"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="object-contain object-center h-fit xl:w-52 w-44 inline-block"
            />
          </Link>
        </div>
        <div className="bg-white shadow-lg md:p-4 p-2 2xl:w-1/3 xl:w-1/2 md:w-3/4 mx-auto md:space-y-3 space-y-2 md:rounded-3xl rounded-2xl w-11/12">
          {/* tabs sign in / sign up */}
          {!showSignupProcess && (
            <>
              <div className="justify-around flex text-black lg:text-lg text-sm w-full">
                <p
                  onClick={() => setOpenTab("sign-up")}
                  className={`w-1/2 cursor-pointer  ${
                    openTab === "sign-up"
                      ? "border-primaryBlue border-b-4 text-primaryBlue md:text-lg text-base font-bold"
                      : "border-gray-200 border-b text-gray-300 text-base"
                  }  transition duration-300 pb-3 text-center`}
                >
                  Sign up
                </p>
                <p
                  onClick={() => setOpenTab("sign-in")}
                  className={`w-1/2 cursor-pointer  ${
                    openTab === "sign-in"
                      ? "border-primaryBlue border-b-4 text-primaryBlue md:text-lg font-bold"
                      : "border-gray-200 border-b text-gray-300 text-base"
                  }  transition duration-300 pb-3 text-center`}
                >
                  Log in
                </p>
              </div>
              {openTab === "sign-in" ? <Signin /> : <Signup />}
            </>
          )}
          {showSignupProcess && step === 1 && <TellUsAbout />}
          {showSignupProcess && step === 2 && <ShippingManager />}
          {showSignupProcess && step === 3 && <TerminalLocation />}
          {showSignupProcess && step === 4 && <UploadDocs />}
          {showSignupProcess && step === 5 && <Review setStep={setStep} />}
          {showSignupProcess && step === 6 && (
            <Success
              buttonText="Complete"
              firstLinedescription="Thank you for submitting your account! We will review it and email you when "
              secondLineDescription="your account is ready."
              title="Account submitted"
              link="/"
              onClick={handleResetStates}
            />
          )}
          {step <= 4 && showSignupProcess && (
            <div className="w-full flex justify-between items-center md:flex-row flex-col mt-5 gap-2">
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className={`${
                  step === 1 ? "disable_button" : "blue_button"
                } md:w-auto`}
              >
                BACK
              </button>
              <p className="text-xs md:text-base">{step} to 4</p>
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="blue_button  md:w-auto"
              >
                NEXT
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
