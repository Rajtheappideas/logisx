import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
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
import { FaCaretDown } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const libraries = ["places"];

const PickUpinfoStep1 = ({
  setStep,
  getValues,
  setValue,
  setActiveBidComponent,
  reset,
  setSelectedFromDropdownArrival,
  selectedFromDropdownArrival,
  setSelectedFromDropdownDeparture,
  selectedFromDropdownDeparture,
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
  const [latAndlngForDeparture, setLatAndlngForDeparture] = useState({
    Lat: "",
    Lng: "",
  });
  const [latAndlngForArrival, setLatAndlngForArrival] = useState({
    Lat: "",
    Lng: "",
  });
  const [selectFirstLocationDeparture, setSelectFirstLocationDeparture] =
    useState(null);
  const [selectFirstLocationArrival, setSelectFirstLocationArrival] =
    useState(null);
  const [showDropdownDepature, setShowDropdownDepature] = useState(false);
  const [showDropdownArrival, setShowDropdownArrival] = useState(false);

  const dispatch = useDispatch();

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });

  const { addresses, addressLoading, DeleteAddressLoading } = useSelector(
    (s) => s.root.globalStates
  );

  let arrTime = getValues().arrivalTime;
  let depTime = getValues().departureTime;

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
      setLatAndlngForArrival({ Lat: lat, Lng: lng });
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
      setLatAndlngForDeparture({ Lat: lat, Lng: lng });
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
    clearErrors,
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
    if (
      (latAndlngForArrival.Lat === "" || latAndlngForArrival.Lng === "") &&
      selectedFromDropdownArrival === null
    ) {
      toast.remove();
      toast.error("Please select valid arrival location.");
      return;
    } else if (
      (latAndlngForDeparture.Lat === "" || latAndlngForDeparture.Lng === "") &&
      selectedFromDropdownDeparture === null
    ) {
      toast.remove();
      toast.error("Please select valid deparuter location.");
      return;
    } else {
      if (selectedFromDropdownDeparture) {
        const departure = addresses?.departureAddresses.find(
          (add) => add?.location === selectedFromDropdownDeparture
        );
        setValue("departureLocation", departure?.location);
        setValue("departureLat", departure.latitude);
        setValue("departureLng", departure.longitude);
      } else {
        setValue("departureLocation", departureLocation);
        setValue("departureLat", latAndlngForDeparture.Lat);
        setValue("departureLng", latAndlngForDeparture.Lng);
      }

      if (selectedFromDropdownArrival) {
        const arrival = addresses?.arrivalAddresses.find(
          (add) => add?.location === selectedFromDropdownArrival
        );
        setValue("arrivalLocation", arrival?.location);
        setValue("arrivalLat", arrival.latitude);
        setValue("arrivalLng", arrival.longitude);
      } else {
        setValue("arrivalLocation", arrivalLocation);
        setValue("arrivalLat", latAndlngForArrival.Lat);
        setValue("arrivalLng", latAndlngForArrival.Lng);
      }

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
        setLatAndlngForDeparture({ Lat: lng, Lng: lng });
        setSelectFirstLocationDeparture(formatted_address);
      }
    } catch (error) {
      reset({ ...getValues(), departureLat: "" });
      reset({ ...getValues(), departureLng: "" });
      setLatAndlngForDeparture({ Lat: "", Lng: "" });
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
        setLatAndlngForArrival({ Lat: lat, Lng: lng });
        setSelectFirstLocationArrival(formatted_address);
      }
    } catch (error) {
      reset({ ...getValues(), arrivalLat: "" });
      reset({ ...getValues(), arrivalLng: "" });
      setLatAndlngForArrival({ Lat: "", Lng: "" });
    }
  }

  useEffect(() => {
    if (departureLat && arrivalLng) {
      setLatAndlngForArrival({
        Lat: arrivalLat,
        Lng: arrivalLng,
      });
      setLatAndlngForDeparture({
        Lat: departureLat,
        Lng: departureLng,
      });
    }
    // if(selectedFromDropdownArrival){

    // }
    setSelectFirstLocationDeparture(departureLocation);
    setSelectFirstLocationArrival(arrivalLocation);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // debounce select first location
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      searchLocationForDeparture();
    }, [10000]);
    return () => clearTimeout(timer);
  }, [watch("departureLocation")]);

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      searchLocationForArrival();
    }, [10000]);
    return () => clearTimeout(timer);
  }, [watch("arrivalLocation")]);

  return (
    <>
      <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
        Pick-up info
      </p>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 md:gap-5 gap-3 w-full">
          {/* Departure location */}
          {/* <div className="w-full md:space-y-3 space-y-2">
            <label className="Label">Departure location</label>
            <div
              className="w-full cursor-pointer  space-y-3 rounded-lg p-4 border relative"
              onClick={() => setShowDropdownDepature(!showDropdownDepature)}
            >
              <div className=" flex items-center justify-between ">
                <p
                  className={`${
                    !selectedFromDropdownDeparture
                      ? "text-gray-200"
                      : "text-black"
                  } select-none`}
                >
                  {selectedFromDropdownDeparture
                    ? selectedFromDropdownDeparture?.location
                    : "Please select a saved departure location"}
                </p>
                {selectedFromDropdownDeparture ? (
                  <MdCancel
                    onClick={() => {
                      setSelectedFromDropdownDeparture(null);
                      // setValue("departureLocation", "");
                    }}
                    className="h-6 w-6 text-blue-400"
                  />
                ) : showDropdownDepature ? (
                  <FaCaretDown className="h-6 w-6 rotate-180 transition-all duration-300" />
                ) : (
                  <FaCaretDown className="h-6 w-6 transition-all duration-300" />
                )}
              </div>
              {showDropdownDepature && (
                <div className="w-full space-y-2">
                  {addresses?.departureAddresses.map((address) => (
                    <p
                      key={address?._id}
                      onClick={() => {
                        setSelectedFromDropdownDeparture(address);
                        setValue("departureLocation", address?.location);
                        setValue("departureLat", address?.latitude);
                        setValue("departureLng", address?.longitude);
                        clearErrors("departureLocation");
                      }}
                      className="hover:bg-gray-200 bg-gray-100 p-1"
                    >
                      {address?.location}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <span className="error" role="alert">
              {errors?.departureLocation?.message}
            </span>
          </div> */}
          <div className="w-full md:space-y-3 space-y-2 relative">
            <label className="Label">Departure location</label>
            {selectedFromDropdownDeparture && (
              <MdCancel
                onClick={() => {
                  setSelectedFromDropdownDeparture(null);
                  setValue("departureLocation", "");
                }}
                className="h-6 w-6 text-blue-400 absolute cursor-pointer top-9 right-1 bg-white"
              />
            )}
            <select
              {...register("departureLocation")}
              name="departureLocation"
              className=" border rounded-lg outline-none p-2 pr-4 w-full"
              onChange={(e) => {
                if (e.target.value !== "") {
                  setSelectedFromDropdownDeparture(e.target.value);
                  setValue("departureLocation", e.target.value);
                } else {
                  setSelectedFromDropdownDeparture(null);
                  setValue("departureLocation", "");
                }
              }}
              value={
                selectedFromDropdownDeparture || "select departure location"
              }
            >
              <option label="select departure location"></option>
              {addresses?.departureAddresses.map((address) => (
                <option
                  key={address?._id}
                  className="hover:bg-gray-200 bg-gray-100 "
                >
                  {address?.location}
                </option>
              ))}
            </select>
          </div>

          {/* Departure location input */}
          {selectedFromDropdownDeparture == null && (
            <div className="w-full md:space-y-3 space-y-2">
              <label className="Label">Input new departure location</label>
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
          )}
          {/* Arrival location */}
          <div className="w-full md:space-y-3 space-y-2 relative">
            <label className="Label">Arrival location</label>
            {selectedFromDropdownArrival && (
              <MdCancel
                onClick={() => {
                  setSelectedFromDropdownArrival(null);
                  setValue("arrivalLocation", "");
                }}
                className="h-6 w-6 text-blue-400 absolute cursor-pointer top-9 right-1 bg-white"
              />
            )}
            <select
              {...register("arrivalLocation")}
              name="arrivalLocation"
              className=" border rounded-lg outline-none p-2 w-full"
              onChange={(e) => {
                if (e.target.value !== "") {
                  setSelectedFromDropdownArrival(e.target.value);
                  setValue("arrivalLocation", e.target.value);
                } else {
                  setSelectedFromDropdownArrival(null);
                  setValue("arrivalLocation", "");
                }
              }}
              value={selectedFromDropdownArrival || "select arrival location"}
            >
              <option label="select arrival location"></option>
              {addresses?.arrivalAddresses.map((address) => (
                <option
                  key={address?._id}
                  className="hover:bg-gray-200 bg-gray-100 "
                >
                  {address?.location}
                </option>
              ))}
            </select>
          </div>

          {/* Arrival location input*/}
          {selectedFromDropdownArrival == null && (
            <div className="w-full md:space-y-3 space-y-2">
              <label className="Label">Input new arrival location</label>
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
                        console.log("Asdasd");
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
          )}
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
              // min={moment(new Date()).format("HH:mm:ss")}
              min="07:00:00"
              max="13:00:02"
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
              className="p-2 max-h-[10rem] min-h-[5rem] w-full focus:border-primaryBlue focus:border-2 text-sm rounded-lg border outline-none"
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
            <div></div>
            <div></div>
            {/* <button
              onClick={() => setActiveBidComponent("single_bid")}
              type="button"
              className="blue_button w-1/4 uppercase"
            >
              back
            </button> */}

            <div>1 of 3</div>
            <button
              type="submit"
              onClick={() => {
                // clearErrors(["arrivalLocation", "departureLocation"]);
                // console.log(getValues());
                // handleSubmit(onSubmit);
              }}
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
