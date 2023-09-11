import React, { useEffect, useState } from "react";
import Background from "../assets/images/BG.png";
import Logo from "../assets/images/logisX-2-png 3.svg";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import Signin from "../components/Auth/Signin";
import Signup from "../components/Auth/Signup";
import { useDispatch, useSelector } from "react-redux";
import { GetToken } from "../firebase/firebase-messaging-sw";
import useAbortApiCall from "../hooks/useAbortApiCall";
import { toast } from "react-hot-toast";
import { handleChangeFcmToken } from "../redux/globalStates";

const Auth = () => {
  const [openTab, setOpenTab] = useState("sign-up");
  const [fcmToken, setFcmToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const { showSignupProcess, user, error } = useSelector(
    (state) => state.root.auth
  );

  const globalState = useSelector((state) => state.root.globalStates);

  const { abortApiCall } = useAbortApiCall();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (fcmToken === null) {
      GetToken(setFcmToken, setLoading);
    }
  }, [fcmToken]);

  useEffect(() => {
    if (user !== null) {
      toast("You already logged in.", { duration: 3000 });
      navigate("/");
    }
    return () => {
      abortApiCall();
    };
  }, []);

  useEffect(() => {
    if (
      fcmToken === null ||
      (error !== null && error?.message === "fcmToken is required.")
    ) {
      GetToken(setFcmToken, setLoading);
      if (error !== null && error?.message === "fcmToken is required.") {
        toast.error("Please try again!");
      }
    }
    if (fcmToken !== null && globalState.fcmToken === null) {
      dispatch(handleChangeFcmToken(fcmToken));
    }
  }, [openTab, fcmToken, error]);

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
          )}
          {openTab === "sign-in" ? (
            <Signin fcmToken={fcmToken} />
          ) : (
            <Signup setOpenTab={setOpenTab} fcmToken={fcmToken} />
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
