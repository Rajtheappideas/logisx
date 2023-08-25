import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import useAbortApiCall from "../../hooks/useAbortApiCall";
import { toast } from "react-hot-toast";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { handleChangePassword } from "../../redux/AuthSlice";
import { useEffect } from "react";

const ChangePassword = () => {
  const [showCurrentPassword, setshowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const { loading } = useSelector((state) => state.root.auth);

  const { AbortControllerRef, abortApiCall } = useAbortApiCall();

  const dispatch = useDispatch();

  const changePasswordSchema = yup.object({
    currentPassword: yup
      .string()
      .required("Current password is required")
      .trim(),
    newPassword: yup
      .string()
      .required("New password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/,
        "Please create a strong password."
      )
      .test(
        "not_sam_as_current_password",
        "Current password not same as new password",
        (value, testContext) => {
          return value !== testContext.parent.currentPassword;
        }
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
    resolver: yupResolver(changePasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
      currentPassword: "",
    },
  });

  const onSubmit = (data) => {
    const { currentPassword, newPassword } = data;
    const response = dispatch(
      handleChangePassword({
        oldPassword: currentPassword,
        newPassword,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res?.payload?.status === "success") {
          toast.success("Password change successfully.", { duration: 2000 });
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
    <div className="bg-bgLight w-full min-h-screen">
      <div className="bg-white md:p-4 p-2 rounded-lg w-full min-h-screen md:space-y-4 space-y-2">
        <p className="md:text-2xl text-md  text-primaryBlue font-semibold">
          Change Password
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-1/2 w-full space-y-2"
        >
          {/* current password */}
          <div className="relative h-[4rem]">
            <label className="Label">Current Password</label>
            <input
              className="input_field text-black"
              type={showCurrentPassword ? "text" : "password"}
              placeholder="******"
              {...register("currentPassword")}
            />
            {showCurrentPassword ? (
              <BsEyeFill
                className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6 text-primaryBlue"
                role="button"
                onClick={() => setshowCurrentPassword(false)}
              />
            ) : (
              <BsEyeSlashFill
                className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6 text-primaryBlue"
                role="button"
                onClick={() => setshowCurrentPassword(true)}
              />
            )}
          </div>
          <span role="alert" className="error">
            {errors?.currentPassword?.message}
          </span>
          {/* new password */}

          <div className="relative h-[4rem]">
            <label className="Label">New password</label>
            <input
              className="input_field"
              type={showNewPassword ? "text" : "password"}
              placeholder="******"
              {...register("newPassword")}
            />
            {showNewPassword ? (
              <BsEyeFill
                className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6 text-primaryBlue"
                role="button"
                onClick={() => setShowNewPassword(false)}
              />
            ) : (
              <BsEyeSlashFill
                className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6 text-primaryBlue"
                role="button"
                onClick={() => setShowNewPassword(true)}
              />
            )}
          </div>
          <p role="alert" className="error">
            {errors?.newPassword?.message}
          </p>
          {/* confirm password */}
          <div>
            <label className="Label">Confirm password</label>
            <input
              className="input_field"
              type="password"
              placeholder="******"
              {...register("confirmPassword")}
            />
            <span role="alert" className="error">
              {errors?.confirmPassword?.message}
            </span>
          </div>
          <div className="text-left">
            <button
              type="submit"
              className="bg-primaryBlue uppercase text-white font-medium text-center md:w-40 w-40 md:h-12 h-10 rounded-lg p-2 hover:bg-primaryBlue/80 active:scale-95 transition"
              disabled={loading}
            >
              {loading ? "Saving..." : "save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
