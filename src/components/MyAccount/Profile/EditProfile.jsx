import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { handleEditProfile } from "../../../redux/AuthSlice";
import { useEffect } from "react";
import useAbortApiCall from "../../../hooks/useAbortApiCall";

const EditProfile = ({ setShowProfile }) => {
  const { loading, user } = useSelector((state) => state.root.auth);

  const { AbortControllerRef, abortApiCall } = useAbortApiCall();

  const dispatch = useDispatch();

  const changePasswordSchema = yup.object({
    fname: yup
      .string()
      .required("firstname is required")
      .trim()
      .max(60, "Max character limit reached")
      .min(2, "minimum two character required")
      .typeError("Only characters allowed")
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        "only contain Latin letters."
      ),
    lname: yup
      .string()
      .required("lastname is required")
      .trim()
      .max(60, "Max character limit reached")
      .min(2, "minimum two character required")
      .typeError("Only characters allowed")
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        "only contain Latin letters."
      ),
    companyName: yup
      .string()
      .required("companyname is required")
      .max(60, "Max character limit reached")
      .min(2, "minimum three character required")
      .trim(),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(changePasswordSchema),
    defaultValues: {
      fname: user?.fname,
      lname: user?.lname,
      companyName: user?.companyName,
    },
  });

  const onSubmit = (data) => {
    const { fname, lname, companyName } = data;
    if (!isDirty) return setShowProfile(false);
    if (isDirty) {
    }
    const response = dispatch(
      handleEditProfile({
        fname,
        lname,
        companyName,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res?.payload?.status === "success") {
          toast.success("Profile edited successfully.", { duration: 2000 });
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
      <div className="bg-white md:p-4 p-2 rounded-2xl w-full min-h-screen md:space-y-4 space-y-2">
        <p className="md:text-2xl text-base text-primaryBlue font-semibold flex items-center  w-auto">
          <span
            onClick={() => {
              setShowProfile(false);
            }}
            className="cursor-pointer"
          >
            <GoArrowLeft className="inline-block mr-2" />
            Edit Profile
          </span>
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 place-items-start items-start gap-3 md:gap-5"
        >
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" text-primaryBlue font-semibold text-sm">
              First name
            </label>
            <input className="input_field" type="text" {...register("fname")} />
            <span role="alert" className="error">
              {errors?.fname?.message}
            </span>
          </div>
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" text-primaryBlue font-semibold text-sm">
              Last name
            </label>
            <input className="input_field" type="text" {...register("lname")} />
            <span role="alert" className="error">
              {errors?.lname?.message}
            </span>
          </div>
          <div className="w-full md:space-y-3 space-y-2 md:col-span-2">
            <label className=" text-primaryBlue font-semibold text-sm">
              Company
            </label>
            <input
              className="input_field"
              type="text"
              {...register("companyName")}
            />
            <span role="alert" className="error">
              {errors?.companyName?.message}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="blue_button uppercase"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
