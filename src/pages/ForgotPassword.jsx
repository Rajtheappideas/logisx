import React, { useState } from "react";
import Background from "../assets/images/BG.png";
import Logo from "../assets/images/logisX-2-png 3.svg";
import Success from "../components/ForgotPassword/Success";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ForgotPasswordComponent from "../components/ForgotPassword/ForgotPassword";
import Verification from "../components/ForgotPassword/Verification";
import ResetPassword from "../components/ForgotPassword/ResetPassword";

const ForgotPassword = () => {
  const [openComponent, setOpenComponent] = useState("forgot-password");

  return (
    <>
      <Helmet>
        <title className="capitalize">{openComponent} | Logisx</title>
      </Helmet>

      <div
        className="w-full h-screen flex items-center justify-center flex-col lg:gap-y-3"
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
        <div className="bg-white shadow-lg md:p-4 p-2 2xl:w-1/3 xl:w-1/2 md:w-3/4 mx-auto md:space-y-4 space-y-2 md:rounded-3xl rounded-2xl w-11/12">
          {openComponent === "forgot-password" && (
            <ForgotPasswordComponent setOpenComponent={setOpenComponent} />
          )}
          {openComponent === "verification" && (
            <Verification setOpenComponent={setOpenComponent} />
          )}
          {openComponent === "reset-password" && (
            <ResetPassword setOpenComponent={setOpenComponent} />
          )}
          {openComponent === "success" && (
            <Success
              buttonText="Sign in"
              firstLinedescription="Verification is success and now "
              secondLineDescription=" you can proceed"
              title="Verification success"
              link="/auth"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
