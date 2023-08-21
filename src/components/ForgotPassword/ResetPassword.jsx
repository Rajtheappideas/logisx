import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ResetPassword = ({ setOpenComponent }) => {
  const ResetSchema = yup.object({
    newPassword: yup.string().required("New password is required").trim(),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .trim(),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(ResetSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
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
        <p className="Title">Reset Password</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:space-y-4 space-y-2 text-center"
      >
        <div className="text-left space-y-2">
          <label htmlFor="newPassword" className="Label">
            New Password
          </label>
          <input
            className="input_field"
            type="password"
            placeholder="*****"
            {...register("newPassword")}
          />
          <span role="alert" className="error">
            {errors?.newPassword?.message}
          </span>
        </div>
        <div className="text-left space-y-2">
          <label htmlFor="confirmPassword" className="Label">
            Confirm Password
          </label>
          <input
            className="input_field"
            type="password"
            placeholder="*****"
            {...register("confirmPassword")}
          />
          <span role="alert" className="error">
            {errors?.confirmPassword?.message}
          </span>
        </div>
        <button
          type="submit"
          onClick={() => setOpenComponent("success")}
          className="blue_button w-1/2 uppercase"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
