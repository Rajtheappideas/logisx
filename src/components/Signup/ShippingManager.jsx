import React, { memo } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { shippingSchema } from "../../yupValidations/validation";

const ShippingManager = memo(({ setStep, setValue, getValues }) => {
  const { shipperFname, shipperLname, shipperEmail, shipperPhone } =
    getValues();

  const [phoneNumber, setPhoneNumber] = useState(
    shipperPhone !== "" ? shipperPhone : ""
  );

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(shippingSchema),
    defaultValues: { shipperFname, shipperLname, shipperEmail, shipperPhone },
  });

  const onSubmit = (data) => {
    const { shipperFname, shipperLname, shipperEmail } = data;
    if (
      !isPossiblePhoneNumber(phoneNumber) ||
      !isValidPhoneNumber(phoneNumber)
    ) {
      toast.remove();
      toast.error("Phone is invalid");
      return true;
    } else {
      setValue("shipperFname", shipperFname);
      setValue("shipperLname", shipperLname);
      setValue("shipperEmail", shipperEmail);
      setValue("shipperPhone", phoneNumber);
      setStep(3);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <p className="Title">Shipping Manager</p>
      <div className="w-full md:space-y-4 space-y-2 md:p-4 p-2">
        <div className="md:space-y-2 space-y-1">
          <label htmlFor="firstName" className="Label">
            First Name
          </label>
          <input
            className="input_field"
            type="text"
            placeholder="First name"
            {...register("shipperFname")}
          />
          <span role="alert" className="error">
            {errors?.shipperFname?.message}
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
            {...register("shipperLname")}
          />
          <span role="alert" className="error">
            {errors?.shipperLname?.message}
          </span>
        </div>
        <div className="md:space-y-2 space-y-1">
          <label htmlFor="email" className="Label">
            Email
          </label>
          <input
            className="input_field"
            type="email"
            placeholder="Email"
            {...register("shipperEmail")}
          />
          <span role="alert" className="error">
            {errors?.shipperEmail?.message}
          </span>
        </div>
        <div className="md:space-y-2 space-y-1">
          <label htmlFor="phone" className="Label">
            Phone number
          </label>
          <Controller
            name="shipperPhone"
            control={control}
            rules={{
              validate: (value) => isValidPhoneNumber(value),
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                country={"in"}
                onChange={(value) => {
                  onChange((e) => {
                    setPhoneNumber("+".concat(value));
                  });
                }}
                autocompleteSearch={true}
                countryCodeEditable={false}
                enableSearch={true}
                value={getValues().shipperPhone}
                inputStyle={{
                  width: "100%",
                  background: "#FFFFFF",
                  padding: "22px 0 22px 50px",
                  borderRadius: "0px",
                  fontSize: "1rem",
                  borderBottom: "1px #CACACA solid !important",
                }}
                dropdownStyle={{
                  background: "white",
                  color: "#13216e",
                  fontWeight: "600",
                  padding: "0px 0px 0px 10px",
                }}
                // buttonStyle={{ borderBottom: "1px gray solid" }}
              />
            )}
          />
          <span role="alert" className="error">
            {errors?.shipperPhone?.message}
          </span>
        </div>
      </div>
      {/* btns */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col mt-5 gap-2">
        <button
          type="button"
          onClick={() => {
            setStep(1);
          }}
          className="blue_button md:w-auto"
        >
          BACK
        </button>
        <p className="text-xs md:text-base">2 to 4</p>
        <button type="submit" className="blue_button  md:w-auto">
          NEXT
        </button>
      </div>
    </form>
  );
});

export default ShippingManager;
