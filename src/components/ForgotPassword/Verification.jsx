import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAbortApiCall from "../../hooks/useAbortApiCall";
import { toast } from "react-hot-toast";
import { handleForgotPassword, handleVerifyOtp } from "../../redux/AuthSlice";

const Verification = ({ setOpenComponent }) => {
  const [numberField, setNumberField] = useState({
    stepOne: "",
    stepTwo: "",
    stepThree: "",
    stepFour: "",
    stepFive: "",
    stepSix: "",
  });
  const [resendOtpLoading, setResendOtpLoading] = useState(false);

  const { loading, email } = useSelector((state) => state.root.auth);

  const dispatch = useDispatch();

  const { AbortControllerRef } = useAbortApiCall();

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
      if (next <= 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  const handleSubmitVerfiyOtp = (e) => {
    e.preventDefault();
    if (Object.values(numberField).includes("")) {
      toast.remove();
      toast.error("Please fill all the fields!!");
      for (const key in numberField) {
        if (numberField.hasOwnProperty(key)) {
          const element = numberField[key];
          if (element === "") {
            document.getElementById(key).focus();
            break;
          }
        }
      }
      return true;
    }

    const response = dispatch(
      handleVerifyOtp({
        email,
        otp: Object.values(numberField).join(""),
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res?.payload?.status === "success") {
          toast.success("OTP verified successfully.", { duration: 2000 });
          resetValues();
          setOpenComponent("reset-password")
        } else if (res?.payload?.status === "error") {
          toast.error(res?.payload?.message);
          resetValues();
        }
      });
    }
  };

  const handleResendOtp = () => {
    if (loading && resendOtpLoading) return true;
    setResendOtpLoading(true);
    const response = dispatch(
      handleForgotPassword({
        email,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res?.payload?.status === "success") {
          console.log("OTP=>", res?.payload?.otp);
          toast.success("Otp Sent to your email.", { duration: 4000 });
          setResendOtpLoading(false);
        } else if (res?.payload?.status === "error") {
          toast.error(res?.payload?.message);
          setResendOtpLoading(false);
        }
      });
    }
  };

  const resetValues = () => {
    setNumberField({
      stepOne: "",
      stepTwo: "",
      stepThree: "",
      stepFour: "",
      stepFive: "",
      stepSix: "",
    });
  };

  useEffect(() => {
    document.getElementById("stepOne").focus();
    // return () => {
    //   abortApiCall();
    // };
  }, []);

  return (
    <section className="w-full space-y-3">
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
        onSubmit={(e) => handleSubmitVerfiyOtp(e)}
      >
        {/* otp boxes */}
        <div className="flex w-full items-center justify-center md:gap-3 gap-1">
          <input
            type="number"
            className="rounded-lg focus:border-2 focus:border-primaryBlue border border-gray-400 font-bold md:text-base text-sm border-textColor md:h-12 md:w-12 h-8 w-8 outline-none text-center"
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
            className="rounded-lg focus:border-2 focus:border-primaryBlue border border-gray-400 font-bold md:text-base text-sm border-textColor md:h-12 md:w-12 h-8 w-8 outline-none text-center"
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
            className="rounded-lg focus:border-2 focus:border-primaryBlue border border-gray-400 font-bold md:text-base text-sm border-textColor md:h-12 md:w-12 h-8 w-8 outline-none text-center"
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
            className="rounded-lg focus:border-2 focus:border-primaryBlue border border-gray-400 font-bold md:text-base text-sm border-textColor md:h-12 md:w-12 h-8 w-8 outline-none text-center"
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
          <input
            type="number"
            className="rounded-lg focus:border-2 focus:border-primaryBlue border border-gray-400 font-bold md:text-base text-sm border-textColor md:h-12 md:w-12 h-8 w-8 outline-none text-center"
            onChange={(e) =>
              handleOnChange(
                "stepFive",
                e.target.value.length > 1
                  ? e.target.value.slice(-1)
                  : e.target.value.trim()
              )
            }
            onKeyUp={(e) => handleInputFocus(e)}
            autoComplete="off"
            tabIndex="5"
            min="0"
            max="9"
            name="steoFive"
            id="steoFive"
            maxLength="1"
            value={numberField?.stepFive}
          />
          <input
            type="number"
            className="rounded-lg focus:border-2 focus:border-primaryBlue border border-gray-400 font-bold md:text-base text-sm border-textColor md:h-12 md:w-12 h-8 w-8 outline-none text-center"
            onChange={(e) =>
              handleOnChange(
                "stepSix",
                e.target.value.length > 1
                  ? e.target.value.slice(-1)
                  : e.target.value.trim()
              )
            }
            onKeyUp={(e) => handleInputFocus(e)}
            autoComplete="off"
            tabIndex="6"
            min="0"
            max="9"
            name="stepSix"
            id="stepSix"
            maxLength="1"
            value={numberField?.stepSix}
          />
        </div>

        {/* resend code */}
        <p className="text-teclborder-textColor text-sm">
          Didn’t recive a verification code? <br />
          <span
            onClick={() => handleResendOtp()}
            className="text-red-500 font-semibold cursor-pointer "
          >
            {resendOtpLoading ? "Sending..." : "Resend the code"}
          </span>{" "}
        </p>
        {/* butons */}
        <button
          type="submit"
          disabled={loading || resendOtpLoading}
          className="blue_button lg:w-1/2 w-2/3 uppercase"
        >
          {loading && !resendOtpLoading ? "Verifying..." : "Continue"}
        </button>
      </form>
    </section>
  );
};

export default Verification;
