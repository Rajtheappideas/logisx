import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { handleResetPassword } from "../../redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import useAbortApiCall from "../../hooks/useAbortApiCall";
import { toast } from "react-hot-toast";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

const ResetPassword = ({ setOpenComponent }) => {
  const [showNewPassword, setshowNewPassword] = useState(false);

  const { verifyToken, loading } = useSelector((state) => state.root.auth);

  const { AbortControllerRef } = useAbortApiCall();

  const dispatch = useDispatch();

  const ResetSchema = yup.object({
    newPassword: yup
      .string()
      .required("New password is required")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?!.*?[=?<>()'"\/\&]).{10,20}$/,
        "Please create a strong password."
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Passwords don't match")
      .required("Confirm Password is required"),
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
    const { newPassword } = data;
    const response = dispatch(
      handleResetPassword({
        password: newPassword,
        verifyToken,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res?.payload?.status === "success") {
          toast.success("Password reset successfully.", { duration: 2000 });
          setOpenComponent("success");
        } else if (res?.payload?.status === "error") {
          toast.error(res?.payload?.message);
        }
      });
    }
  };

  return (
    <div className="w-full">
      <p className="Title">Reset Password</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:space-y-4 space-y-2 text-center"
      >
        <div className="text-left space-y-2 relative h-[4.5rem]">
          <label htmlFor="newPassword" className="Label">
            New Password
          </label>
          <input
            className="input_field"
            type={showNewPassword ? "text" : "password"}
            placeholder="*****"
            {...register("newPassword")}
          />

          {showNewPassword ? (
            <BsEyeFill
              className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6 text-primaryBlue"
              role="button"
              onClick={() => setshowNewPassword(false)}
            />
          ) : (
            <BsEyeSlashFill
              className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6 text-primaryBlue"
              role="button"
              onClick={() => setshowNewPassword(true)}
            />
          )}
        </div>
        <p role="alert" className="error text-left">
          {errors?.newPassword?.message}
        </p>
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
          disabled={loading}
          className="blue_button w-1/2 uppercase"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
