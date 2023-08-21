import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ForgotPassword = ({ setOpenComponent }) => {
  const forgotSchema = yup.object({
    email: yup.string().email().required("Email is required").trim(),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(forgotSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    const { email } = data;
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
    <div className="w-full">
      <p className="Title">Forgot Password</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:space-y-4 space-y-2 text-center"
      >
        <div className="text-left space-y-2">
          <label htmlFor="email" className="Label">
            Email
          </label>
          <input
            className="input_field"
            type="email"
            placeholder="loremipsum@mail.com"
            {...register("email")}
          />
          <span role="alert" className="error">
            {errors?.email?.message}
          </span>
        </div>
        <button
          type="submit"
          onClick={() => setOpenComponent("verification")}
          className="blue_button w-1/2"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
