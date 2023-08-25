import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { handleChangeShowSignupProcess } from "../../redux/AuthSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const TellUsAbout = memo(({ setStep, setValue, getValues, setOpenTab }) => {
  const { fname, lname, companyName } = getValues();

  const dispatch = useDispatch();

  const tellusschema = yup.object({
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
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(tellusschema),
    defaultValues: { fname, lname, companyName },
  });

  const onSubmit = (data) => {
    const { fname, lname, companyName } = data;
    setValue("fname", fname);
    setValue("lname", lname);
    setValue("companyName", companyName);
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <p className="Title">Tell us about you</p>
      <div className="w-full md:space-y-4 space-y-2 md:p-4 p-2">
        <div className="md:space-y-2 space-y-1">
          <label htmlFor="firstName" className="Label">
            First Name
          </label>
          <input
            className="input_field"
            type="text"
            placeholder="First name"
            {...register("fname")}
          />
          <span role="alert" className="error">
            {errors?.fname?.message}
          </span>
        </div>
        <div className="md:space-y-2 space-y-1">
          <label htmlFor="lastName" className="Label">
            Last Name
          </label>
          <input
            className="input_field"
            type="text"
            placeholder="Last name"
            {...register("lname")}
          />
          <span role="alert" className="error">
            {errors?.lname?.message}
          </span>
        </div>
        <div className="md:space-y-2 space-y-1">
          <label htmlFor="company" className="Label">
            Company
          </label>
          <input
            className="input_field"
            type="text"
            placeholder="Company"
            {...register("companyName")}
          />
          <span role="alert" className="error">
            {errors?.companyName?.message}
          </span>
        </div>
      </div>
      {/* btns */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col mt-5 gap-2">
        <button
          type="button"
          onClick={() => {
            dispatch(handleChangeShowSignupProcess(false));
            setOpenTab("sign-up");
            setStep(0);
          }}
          className="blue_button md:w-auto"
        >
          BACK
        </button>
        <p className="text-xs md:text-base">1 to 4</p>
        <button type="submit" className="blue_button  md:w-auto">
          NEXT
        </button>
      </div>
    </form>
  );
});

export default TellUsAbout;
