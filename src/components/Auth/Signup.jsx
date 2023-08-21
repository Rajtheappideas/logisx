import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeShowSignupProcess } from "../../redux/globalStates";

const Signup = () => {
  const [showPassword, setshowPassword] = useState(false);

  const { showSignupProcess, activeSignupComponent } = useSelector(
    (state) => state.root.globalStates
  );

  const dispatch = useDispatch();

  const signinSchema = yup.object({
    email: yup.string().email().required("Email is required").trim(),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/,
        "Please create a strong password."
      )
      .trim(),
  });

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
    console.log(data);
    // const response = dispatch(
    //   handleLoginUser({
    //     email,
    //     password,
    //     signal: AbortControllerRef,
    //   })
    // );
    // if (response) {
    //   response.then((res) => {
    //     if (res?.payload?.status === "success") {
    //       toast.success(t("Sign in Successfully."), { duration: 2000 });
    //       dispatch(handleSuccess());
    //       navigate("/");
    //     } else if (res?.payload?.status === "error") {
    //       toast.error(res?.payload?.message);
    //     }
    //   });
    // }
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
      <p className="text-center w-full lg:text-lg text-sm">
        By creating an account, you agree to our{" "}
        <span role="button" className="text-[#017DC3]">
          Terms, Privacy Policy
        </span>
        ,
        <br className="md:block hidden" /> and{" "}
        <span role="button" className="text-[#017DC3]">
          Cookie Policy
        </span>{" "}
        .
      </p>
      {/* submit btn */}
      <div className="text-center">
        <button
          onClick={() => {
            dispatch(handleChangeShowSignupProcess(true));
          }}
          type="submit"
          className={`blue_button w-1/2 uppercase`}
        >
          sign in
        </button>
      </div>
    </form>
  );
};

export default Signup;
