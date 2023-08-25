import React, { memo } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { handleChangeShowSignupProcess } from "../../redux/AuthSlice";
import { handleChangeActiveComponent } from "../../redux/globalStates";
import { useNavigate } from "react-router-dom";

const SignupComponent = memo(({ setStep, setValue, getValues }) => {
  const [showPassword, setshowPassword] = useState(false);
  const dispatch = useDispatch();

  const signinSchema = yup.object({
    email: yup.string().email().required("Email is required").trim(),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?!.*?[=?<>()'"\/\&]).{10,20}$/,
        "Please create a strong password."
      )
      .trim(),
  });

  const { email, password } = getValues();

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(signinSchema),
    defaultValues: { email, password },
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    setValue("email", email);
    setValue("password", password);
    dispatch(handleChangeShowSignupProcess(true));
    setStep(1);
  };

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

      <div className="w-full text-gray-400">
        8 characters, 1 number, and ?, !, or *
      </div>
      {/*  terms + privcy link*/}
      {/* <p className="text-center w-full lg:text-lg text-sm">
        By creating an account, you agree to our{" "}
        <span
          onClick={() => {
            navigate("/");
            dispatch(handleChangeActiveComponent("terms"));
          }}
          role="button"
          className="text-[#017DC3]"
        >
          Terms,
        </span>
        <span
          onClick={() => {
            navigate("/");
            dispatch(handleChangeActiveComponent("terms"));
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
        <button type="submit" className={`blue_button w-1/2 uppercase`}>
          sign up
        </button>
      </div>
    </form>
  );
});

export default SignupComponent;
