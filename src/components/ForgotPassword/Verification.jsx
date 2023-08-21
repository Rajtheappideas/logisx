import React, { useEffect, useState } from "react";
import Background from "../../assets/images/BG.png";
import Logo from "../../assets/images/logisX-2-png 3.svg";
import { Link } from "react-router-dom";

const Verification = ({setOpenComponent}) => {
  const [numberField, setNumberField] = useState({
    stepOne: "",
    stepTwo: "",
    stepThree: "",
    stepFour: "",
  });
  const [resendOtpLoading, setResendOtpLoading] = useState(false);

  // const { error, loading } = useSelector((state) => state.root.auth);

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const { t } = useTranslation();

  // const { AbortControllerRef, abortApiCall } = useAbortApiCall();

  const handleOnChange = (value, e) => {
    setNumberField({ ...numberField, [value]: e });
  };

  const handleInputFocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 4) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  // const handleSubmitVerfiyOtp = (e) => {
  //   e.preventDefault();
  //   if (Object.values(numberField).includes("")) {
  //     toast.remove();
  //     toast.error(t("Please fill all the fields!!"));
  //     for (const key in numberField) {
  //       if (numberField.hasOwnProperty(key)) {
  //         const element = numberField[key];
  //         if (element === "") {
  //           document.getElementById(key).focus();
  //           break;
  //         }
  //       }
  //     }
  //     return true;
  //   }

  //   const response = dispatch(
  //     handleVerifyOtp({
  //       email,
  //       otp: Object.values(numberField).join(""),
  //       signal: AbortControllerRef,
  //     })
  //   );
  //   if (response) {
  //     response.then((res) => {
  //       if (res?.payload?.status === "success") {
  //         toast.success(t("OTP verified successfully."), { duration: 2000 });
  //         navigate("/reset-password");
  //         resetValues();
  //       } else if (res?.payload?.status === "error") {
  //         toast.error(res?.payload?.message);
  //         resetValues();
  //       }
  //     });
  //   }
  // };

  // const handleResendOtp = () => {
  //   if (loading && resendOtpLoading) return true;
  //   setResendOtpLoading(true);
  //   const response = dispatch(
  //     handleForgotPassword({
  //       email,
  //       signal: AbortControllerRef,
  //     })
  //   );
  //   if (response) {
  //     response.then((res) => {
  //       if (res?.payload?.status === "success") {
  //         console.log("OTP=>", res?.payload?.otp);
  //         toast.success(t("Otp Sent to your email."), { duration: 4000 });
  //         setResendOtpLoading(false);
  //       } else if (res?.payload?.status === "error") {
  //         toast.error(res?.payload?.message);
  //         setResendOtpLoading(false);
  //       }
  //     });
  //   }
  // };

  const resetValues = () => {
    setNumberField({
      stepOne: "",
      stepTwo: "",
      stepThree: "",
      stepFour: "",
    });
  };

  useEffect(() => {
    document.getElementById("stepOne").focus();
    // return () => {
    //   abortApiCall();
    // };
  }, []);

  return (
    <section className="w-full">
      {/* title */}
      <div className="space-y-3 text-center">
        <p className="Title">Verification</p>
        <p className="text-sm text-teclborder-textColor leading-normal font-medium">
          Check your email for the OTP
        </p>
      </div>
      {/* {error !== null && <span className="error">{error?.message}</span>} */}

      {/* form  */}
      <form
        className="md:space-y-5 space-y-2 w-full text-center"
        // onSubmit={(e) => handleSubmitVerfiyOtp(e)}
      >
        {/* otp boxes */}
        <div className="flex w-full items-center justify-center md:gap-3 gap-1">
          <input
            type="number"
            className="rounded-lg focus:border-2 focus:border-primaryBlue border font-bold md:text-base text-sm border-textColor md:h-12 md:w-12 h-8 w-8 outline-none text-center"
            onChange={(e) => {
              handleOnChange(
                "stepOne",
                e.target.value.length > 1
                  ? e.target.value.slice(-1)
                  : e.target.value.trim()
              );
            }}
            value={numberField?.stepOne}
            onKeyUp={(e) => handleInputFocus(e)}
            autoComplete="off"
            tabIndex="1"
            min="0"
            max="9"
            maxLength="1"
            name="stepOne"
            id="stepOne"
          />
          <input
            type="number"
            className="rounded-lg focus:border-2 focus:border-primaryBlue border font-bold md:text-base text-sm border-textColor md:h-12 md:w-12 h-8 w-8 outline-none text-center"
            onChange={(e) =>
              handleOnChange(
                "stepTwo",
                e.target.value.length > 1
                  ? e.target.value.slice(-1)
                  : e.target.value.trim()
              )
            }
            onKeyUp={(e) => handleInputFocus(e)}
            autoComplete="off"
            tabIndex="2"
            min="0"
            max="9"
            value={numberField?.stepTwo}
            name="stepTwo"
            maxLength="1"
            id="stepTwo"
          />
          <input
            type="number"
            className="rounded-lg focus:border-2 focus:border-primaryBlue border font-bold md:text-base text-sm border-textColor md:h-12 md:w-12 h-8 w-8 outline-none text-center"
            onChange={(e) =>
              handleOnChange(
                "stepThree",
                e.target.value.length > 1
                  ? e.target.value.slice(-1)
                  : e.target.value.trim()
              )
            }
            onKeyUp={(e) => handleInputFocus(e)}
            autoComplete="off"
            tabIndex="3"
            min="0"
            max="9"
            name="stepThree"
            id="stepThree"
            maxLength="1"
            value={numberField?.stepThree}
          />
          <input
            type="number"
            className="rounded-lg focus:border-2 focus:border-primaryBlue border font-bold md:text-base text-sm border-textColor md:h-12 md:w-12 h-8 w-8 outline-none text-center"
            onChange={(e) =>
              handleOnChange(
                "stepFour",
                e.target.value.length > 1
                  ? e.target.value.slice(-1)
                  : e.target.value.trim()
              )
            }
            onKeyUp={(e) => handleInputFocus(e)}
            autoComplete="off"
            tabIndex="4"
            min="0"
            max="9"
            name="stepFour"
            id="stepFour"
            maxLength="1"
            value={numberField?.stepFour}
          />
        </div>

        {/* resend code */}
        <p className="text-teclborder-textColor text-sm">
          Didn’t recive a verification code? <br />
          <span
            // onClick={() => handleResendOtp()}
            className="text-red-500 font-semibold cursor-pointer "
          >
            {/* {resendOtpLoading
                ? t("Sending").concat("...")
                : t("Resend the code")} */}
            Resend the code
          </span>{" "}
        </p>
        {/* butons */}
        <button
          type="submit"
          // disabled={loading || resendOtpLoading}
          className="blue_button lg:w-1/2 w-2/3 uppercase"
          onClick={()=>setOpenComponent("reset-password")}
        >
          {/* {loading && !resendOtpLoading
              ? t("Verifying").concat("...")
              : t("Continue")} */}
          Continue
        </button>
      </form>
    </section>
  );
};

export default Verification;
