import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { pickUpInfoStepOne } from "../../yupValidations/validation";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import { useEffect } from "react";
import Geocode from "react-geocode";

const libraries = ["places"];

const PickUpinfoStep1 = ({
  setStep,
  getValues,
  setValue,
  setActiveBidComponent,
  clearErrors,
  reset,
}) => {
  const {
    departureLocation,
    departureLat,
    departureLng,
    arrivalLocation,
    arrivalLat,
    arrivalLng,
    departureDate,
    departureTime,
    arrivalDate,
    arrivalTime,
    emptyAtBidding,
    jobDescription,
    receiverName,
    receiverAddress,
    receiverEmail,
    receiverPhone,
    bidExpriry,
    price,
  } = getValues();

  const [searchValueArrival, setSearchValueArrival] = useState(null);
  const [searchValueDeparture, setSearchValueDeparture] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(
    receiverPhone !== "" ? receiverPhone : ""
  );
  const [latAndlng, setLatAndlng] = useState({
    depLat: "",
    depLng: "",
    arrLat: "",
    arrLng: "",
  });
  const [selectFirstLocationDeparture, setSelectFirstLocationDeparture] =
    useState(null);
  const [selectFirstLocationArrival, setSelectFirstLocationArrival] =
    useState(null);

  const dispatch = useDispatch();

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });

  let arrTime = arrivalTime;
  let depTime = departureTime;

  function onLoadArrival(autocomplete) {
    setSearchValueArrival(autocomplete);
  }

  function onLoadDeparture(autocomplete) {
    setSearchValueDeparture(autocomplete);
  }

  function onPlaceChangedArrival() {
    if (searchValueArrival != null) {
      const place = searchValueArrival?.getPlace();
      const lat = place?.geometry?.location?.lat();
      const lng = place?.geometry?.location?.lng();
      setLatAndlng({ ...latAndlng, arrLat: lat, arrLng: lng });
      setValue("arrivalLocation", place?.formatted_address || place?.name);
      setSelectFirstLocationArrival(place?.formatted_address);
    } else {
      toast.error("Please enter text");
    }
  }

  function onPlaceChangedDeparture() {
    if (searchValueDeparture != null) {
      const place = searchValueDeparture?.getPlace();
      const lat = place?.geometry?.location?.lat();
      const lng = place?.geometry?.location?.lng();
      setLatAndlng({ ...latAndlng, depLat: lat, depLng: lng });
      setValue("departureLocation", place?.formatted_address || place?.name);
      setSelectFirstLocationDeparture(place?.formatted_address);
    } else {
      toast.error("Please enter text");
    }
  }

  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(pickUpInfoStepOne),
    defaultValues: {
      departureLocation,
      departureLat,
      departureLng,
      arrivalLocation,
      arrivalLat,
      arrivalLng,
      departureDate,
      departureTime:
        departureTime !== "" ? convertTime12to24(departureTime) : "",
      arrivalDate,
      arrivalTime: arrivalTime !== "" ? convertTime12to24(arrivalTime) : "",
      emptyAtBidding,
      jobDescription,
      receiverName,
      receiverAddress,
      receiverEmail,
      receiverPhone,
      bidExpriry,
      price,
    },
  });

  const onSubmit = (data) => {
    const {
      departureLocation,
      departureLat,
      departureLng,
      arrivalLocation,
      arrivalLat,
      arrivalLng,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      emptyAtBidding,
      jobDescription,
      receiverName,
      receiverAddress,
      receiverEmail,
      bidExpriry,
      price,
    } = data;
    if (
      !isPossiblePhoneNumber(phoneNumber) ||
      !isValidPhoneNumber(phoneNumber)
    ) {
      toast.remove();
      toast.error("Phone is invalid");
      return true;
    }
    if (Object.values(latAndlng).includes("")) {
      toast.remove();
      toast.error("Please select valid locations");
      return;
    } else {
      setValue("departureLocation", departureLocation);
      setValue("arrivalLocation", arrivalLocation);
      setValue("departureLat", latAndlng.depLat);
      setValue("departureLng", latAndlng.depLng);
      setValue("arrivalLat", latAndlng.arrLat);
      setValue("arrivalLng", latAndlng.arrLng);
      setValue("departureDate", departureDate);
      setValue(
        "departureTime",
        depTime === departureTime
          ? departureTime
          : convertTimeToAmOrPm(departureTime)
      );
      setValue("arrivalDate", arrivalDate);
      setValue(
        "arrivalTime",
        arrTime === arrivalTime ? arrivalTime : convertTimeToAmOrPm(arrivalTime)
      );
      setValue("emptyAtBidding", emptyAtBidding);
      setValue("jobDescription", jobDescription);
      setValue("receiverName", receiverName);
      setValue("receiverEmail", receiverEmail);
      setValue("bidExpriry", bidExpriry);
      setValue("price", price);
      setValue("receiverAddress", receiverAddress);
      setValue("receiverPhone", phoneNumber);
      setStep(2);
    }
  };

  function convertTimeToAmOrPm(val) {
    if (val) {
      var [h, m] = val?.split(":");
      let time = `${(h % 12 ? h % 12 : 12) + ":" + m} ${h >= 12 ? "PM" : "AM"}`;
      return time;
    }
  }

  function convertTime12to24(time12h) {
    if (!time12h) return;
    const [time, modifier] = time12h?.split(" ");

    let [hours, minutes] = time?.split(":");

    if (hours === "12") {
      hours = "00";
    } else if (hours < 10) {
      hours = `0${hours}`;
    }

    if (modifier === "PM") {
      hours = parseInt(hours) + 12;
    }

    return `${hours}:${minutes}`;
  }

  async function searchLocationForDeparture() {
    try {
      if (selectFirstLocationDeparture === null && departureLocation !== "") {
        Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
        Geocode.setLanguage("en");
        const res = await Geocode.fromAddress(departureLocation);
        const { formatted_address, geometry } = res?.results[0];
        const { lat, lng } = geometry?.location;
        setValue("departureLocation", formatted_address);
        setLatAndlng({ ...latAndlng, depLat: lat, depLng: lng });
        setSelectFirstLocationDeparture(formatted_address);
      }
    } catch (error) {
      reset({ ...getValues(), departureLat: "" });
      reset({ ...getValues(), departureLng: "" });
      setLatAndlng({ ...latAndlng, depLat: "", depLng: "" });
    }
  }

  async function searchLocationForArrival() {
    try {
      if (selectFirstLocationArrival === null && arrivalLocation !== "") {
        Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
        Geocode.setLanguage("en");
        const res = await Geocode.fromAddress(arrivalLocation);
        const { formatted_address, geometry } = res?.results[0];
        const { lat, lng } = geometry?.location;
        setValue("arrivalLocation", formatted_address);
        setLatAndlng({ ...latAndlng, arrLat: lat, arrLng: lng });
        setSelectFirstLocationArrival(formatted_address);
      }
    } catch (error) {
      reset({ ...getValues(), arrivalLat: "" });
      reset({ ...getValues(), arrivalLng: "" });
      setLatAndlng({ ...latAndlng, arrLat: "", arrLng: "" });
    }
  }

  useEffect(() => {
    if (departureLat && arrivalLng) {
      setLatAndlng({
        arrLat: arrivalLat,
        arrLng: arrivalLng,
        depLat: departureLat,
        depLng: departureLng,
      });
    }
    setSelectFirstLocationDeparture(departureLocation);
    setSelectFirstLocationArrival(arrivalLocation);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // debounce select first location
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      searchLocationForDeparture();
    }, [3000]);
    return () => clearTimeout(timer);
  }, [watch("departureLocation")]);

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      searchLocationForArrival();
    }, [3000]);
    return () => clearTimeout(timer);
  }, [watch("arrivalLocation")]);

  return (
    <>
      <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
        Pick-up info
      </p>
      <form className="w-full">
        <div className="grid lg:grid-cols-2 md:gap-5 gap-3 w-full">
          {/* Departure location */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Departure location</label>
            {isLoaded && (
              <Autocomplete
                className="w-full outline-none focus:outline-none input_field"
                onPlaceChanged={onPlaceChangedDeparture}
                onLoad={onLoadDeparture}
              >
                <input
                  className="w-full outline-none"
                  type="text"
                  value={selectFirstLocationDeparture}
                  placeholder="Address, City, State, zip code"
                  {...register("departureLocation", {
                    onChange: (e) => {
                      setValue("departureLocation", e.target.value);
                      setSelectFirstLocationDeparture(null);
                    },
                  })}
                  autoComplete="off"
                  name="departureLocation"
                  id="departureLocation"
                />
              </Autocomplete>
            )}
            <span className="error" role="alert">
              {errors?.departureLocation?.message}
            </span>
          </div>
      
          {/* Arrival location */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Arrival location</label>
            {isLoaded && (
              <Autocomplete
                className="w-full outline-none focus:outline-none input_field"
                onPlaceChanged={onPlaceChangedArrival}
                onLoad={onLoadArrival}
              >
                <input
                  className="w-full outline-none"
                  type="text"
                  placeholder="Address, City, State, zip code"
                  autoComplete="off"
                  value={selectFirstLocationArrival}
                  {...register("arrivalLocation", {
                    onChange: (e) => {
                      setValue("arrivalLocation", e.target.value);
                      setSelectFirstLocationArrival(null);
                    },
                  })}
                  name="arrivalLocation"
                  id="arrivalLocation"
                />
              </Autocomplete>
            )}
            <span className="error" role="alert">
              {errors?.arrivalLocation?.message}
            </span>
          </div>
          {/* Delivery pick-up date */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Departure Delivery pick-up</label>
            <input
              type="date"
              placeholder="Choose date"
              name="departureDate"
              className="input_field"
              {...register("departureDate")}
              min={new Date().toISOString().split("T")[0]}
            />
            <span className="error">{errors?.departureDate?.message}</span>
          </div>
          {/* Delivery pick-up time */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Departure Delivery Time</label>
            <input
              type="time"
              name="departureTime"
              className="input_field"
              {...register("departureTime")}
            />
            <span className="error">{errors?.departureTime?.message}</span>
          </div>
          {/* Delivery arrival date*/}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Arrival Delivery date</label>
            <input
              type="date"
              name="arrivalDate"
              className="input_field"
              {...register("arrivalDate")}
              min={new Date().toISOString().split("T")[0]}
            />
            <span className="error">{errors?.arrivalDate?.message}</span>
          </div>
          {/* Delivery arrival time*/}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Arrival Delivery time</label>
            <input
              type="time"
              name="arrivalTime"
              className="input_field"
              {...register("arrivalTime")}
            />
            <span className="error">{errors?.arrivalTime?.message}</span>
          </div>
          {/* Empty at time of bidding */}
          <div className="lg:col-span-2 space-y-2">
            <p className="Label block">Empty at time of bidding?</p>
            <div className="flex items-center gap-x-3">
              <div className="flex items-center gap-x-1">
                <input
                  id="yes"
                  type="radio"
                  name="empty_at_bidding"
                  className="w-4 h-4 text-blue-600 "
                  {...register("emptyAtBidding")}
                  value="yes"
                />
                <label
                  htmlFor="yes"
                  className="ml-2 text-sm font-medium text-textBlackcolor"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  id="no"
                  type="radio"
                  name="empty_at_bidding"
                  className="w-4 h-4 text-blue-600 "
                  {...register("emptyAtBidding")}
                  value="no"
                />
                <label
                  htmlFor="no"
                  className="ml-2 text-sm font-medium text-textBlackcolor"
                >
                  No
                </label>
              </div>
            </div>
            <span className="error">{errors?.emptyAtBidding?.message}</span>
          </div>
          {/* Job description */}
          <div className="lg:col-span-2 space-y-2">
            <p className="Label">Job description</p>
            <textarea
              className="p-2 h-28 w-full focus:border-primaryBlue focus:border-2 text-sm rounded-lg border outline-none"
              placeholder="Type Here..."
              {...register("jobDescription")}
            ></textarea>
            <span className="error">{errors?.jobDescription?.message}</span>
          </div>
          {/* Receiver’s name */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Receiver’s name</label>
            <input
              className="input_field"
              type="text"
              placeholder="Receiver’s name"
              name="receiverName"
              {...register("receiverName")}
            />
            <span className="error">{errors?.receiverName?.message}</span>
          </div>
          {/* Receiver’s address */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Receiver’s address</label>
            <input
              className="input_field"
              type="text"
              placeholder="Address, City, State, zip code"
              name="receiverAddress"
              {...register("receiverAddress")}
            />
            <span className="error">{errors?.receiverAddress?.message}</span>
          </div>
          {/* Receiver’s phone number */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Receiver’s phone number</label>
            <Controller
              name="receiverPhone"
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
                  value={receiverPhone}
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
            <span className="error">{errors?.receiverPhone?.message}</span>
          </div>
          {/* Receiver’s email address */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" Label">Receiver’s email address</label>
            <input
              className="input_field"
              type="email"
              placeholder="email@email.com"
              name="receiverEmail"
              {...register("receiverEmail")}
            />
            <span className="error">{errors?.receiverEmail?.message}</span>
          </div>
          {/* Bid expires in date */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Bid expires date</label>
            <input
              type="date"
              placeholder="Choose date"
              className="input_field"
              name="bidExpriry"
              {...register("bidExpriry")}
              min={new Date().toISOString().split("T")[0]}
            />
            <span className="error">{errors?.bidExpriry?.message}</span>
          </div>
          {/* price */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Price</label>
            <input
              type="number"
              placeholder="$1000"
              className="input_field"
              name="price"
              {...register("price")}
            />
            <span className="error">{errors?.price?.message}</span>
          </div>
          <div className="w-full col-span-full flex items-center justify-between md:flex-row flex-col gap-2">
            <button
              onClick={() => setActiveBidComponent("bid_upload")}
              type="button"
              className="blue_button w-1/4 uppercase"
            >
              back
            </button>

            <div>1 of 3</div>
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="blue_button w-1/4 uppercase"
            >
              NEXT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PickUpinfoStep1;
