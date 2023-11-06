import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import {
  handleChangeShowSignupProcess,
  handleLoginUser,
} from "../../redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import useAbortApiCall from "../../hooks/useAbortApiCall";
import { handleSuccess } from "../../redux/globalStates";
import { socket } from "../../Socket";
import { signinSchema } from "../../yupValidations/validation";

const Signin = ({ fcmToken, FcmTokenLoading }) => {
  const [showPassword, setshowPassword] = useState(false);

  const { loading } = useSelector((state) => state.root.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { AbortControllerRef, abortApiCall } = useAbortApiCall();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    const response = dispatch(
      handleLoginUser({
        email,
        password,
        fcmToken,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res?.payload?.status === "success") {
          toast.success("Sign in Successfully.", { duration: 2000 });
          dispatch(handleSuccess());
          dispatch(handleChangeShowSignupProcess(false));
          // socket.emit("join", { id: res.payload?.shipper?._id }).connect();
          navigate("/");
        } else if (res?.payload?.status === "error") {
          toast.error(res?.payload?.message);
        }
      });
    }
  };

  useEffect(() => {
    return () => {
      abortApiCall();
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:space-y-3 space-y-2"
    >
      <div className="space-y-2">
        <label htmlFor="email" className="Label">
          Email
        </label>
        <input
          className="input_field"
          type="email"
          placeholder="email@gmail.com"
          {...register("email")}
        />
        <span role="alert" className="error">
          {errors?.email?.message}
        </span>
      </div>
      <div className="space-y-2 w-full relative h-[4.5rem]">
        <label htmlFor="password" className="Label">
          Password
        </label>
        <input
          className="focus:border-b-2 focus:border-primaryBlue transition border-b border-textColorGray w-full focus:outline-none md:p-2 p-1 pr-12"
          type={showPassword ? "text" : "password"}
          placeholder="******"
          {...register("password")}
        />

        {showPassword ? (
          <BsEyeFill
            className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6 text-primaryBlue"
            role="button"
            onClick={() => setshowPassword(false)}
          />
        ) : (
          <BsEyeSlashFill
            className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6 text-primaryBlue"
            role="button"
            onClick={() => setshowPassword(true)}
          />
        )}
      </div>
      <p role="alert" className="error">
        {errors?.password?.message}
      </p>

      {/* forgot + remember me box */}
      <div className="flex flex-wrap justify-between items-center w-full">
        <div className="flex items-center gap-x-2 select-none">
          <input
            id="remember_me"
            type="checkbox"
            className="md:w-5 md:h-5 w-3 h-3"
          />
          <label
            htmlFor="remember_me"
            className="text-black lg:text-lg text-sm"
          >
            Remember me
          </label>
        </div>
        <button
          type="button"
          className="text-black lg:text-lg text-sm hover:underline transition duration-300 hover:text-primaryBlue"
        >
          <Link to="/forgot-password">Forgot Password ?</Link>
        </button>
      </div>

      {/*  terms + privcy link*/}
      {/* <p className="text-center w-full lg:text-lg text-sm">
        By creating an account, you agree to our{" "}
        <span
          onClick={() => {
            toast.error("Please login first");
          }}
          role="button"
          className="text-[#017DC3]"
        >
          Terms ,
        </span>
        <span
          onClick={() => {
            toast.error("Please login first");
          }}
          role="button"
          className="text-[#017DC3]"
        >
          &nbsp; Privacy Policy
        </span>
        .
      </p> */}
      {/* submit btn */}
      <div className="text-center">
        <button
          disabled={loading}
          type="submit"
          className={`blue_button w-1/2 uppercase`}
        >
          {loading ? "Logging in..." : "log in"}
        </button>
      </div>
    </form>
  );
};

export default Signin;
