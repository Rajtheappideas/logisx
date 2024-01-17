import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { GoArrowLeft } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { handleAddAddress } from "../../../redux/globalStates";

const libraries = ["places"];

const AddAddress = ({ setShowAddAddress }) => {
  const [locationDetails, setLocationDetails] = useState(null);
  const [searchResult, setSearchResult] = useState("");
  const [locationType, setLocationType] = useState("");

  const { addresses, addressLoading, DeleteAddressLoading } = useSelector(
    (s) => s.root.globalStates
  );
  const { token } = useSelector((s) => s.root.auth);

  const dispatch = useDispatch();

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });

  function onPlaceChanged() {
    if (!searchResult) return toast.error("Please a valid address.")
    const place = searchResult?.getPlace();
    const latitude = place?.geometry?.location?.lat();
    const longitude = place?.geometry?.location?.lng();
    const allDetails = {};
    allDetails.location = place?.formatted_address || place?.name;
    allDetails.longitude = longitude;
    allDetails.latitude = latitude;
    setLocationDetails({
      ...locationDetails,
      ...allDetails,
    });
  }

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }

  const handleAdd = () => {
    toast.dismiss();
    if (locationType === "") return toast.error("Please select location type.");
    if (locationDetails == null) return toast.error("Please enter location & valid location.");
    if (addressLoading) return;
    const response = dispatch(
      handleAddAddress({ token, locationType, locationDetails })
    );
    if (!response) return;
    response.then((res) => {
      if (res?.payload?.status == "success") {
        toast.remove();
        setShowAddAddress(false);
        toast.success(res?.payload?.message);
      }
    });
  };

  return (
    <div className="bg-bgLight w-full min-h-screen">
      <div className="bg-white md:p-4 p-2 rounded-2xl w-full min-h-screen md:space-y-4 space-y-2">
        {/* title & button */}
        <div className="flex justify-between items-center">
          <p
            onClick={() => setShowAddAddress(false)}
            className="md:text-2xl text-md  text-primaryBlue font-semibold flex items-center cursor-pointer"
          >
            <GoArrowLeft className="inline-block mr-2" />
            Add address
          </p>
        </div>
        {/* dropdown */}
        <div className="w-1/2 space-y-2">
          <label htmlFor="location" className="Label">
            Location Type
          </label>
          <select
            onChange={(e) => setLocationType(e.target.value)}
            name="locations"
            id=""
            className="input_field "
          >
            <option label="Select Location"></option>
            <option value="Departure">Departure</option>
            <option value="Arrival">Arrival</option>
          </select>
        </div>
        {/* input field */}
        <div className="w-full md:space-y-3 space-y-2">
          <label className="Label">Departure location</label>
          {isLoaded && (
            <Autocomplete
              className="w-full outline-none focus:outline-none input_field"
              onPlaceChanged={onPlaceChanged}
              onLoad={onLoad}
            >
              <input
                className="w-full outline-none"
                type="text"
                // value={selectFirstLocationDeparture}
                placeholder="Address, City, State, zip code"
                // onChange={(e) =>
                //   setLocationDetails({
                //     ...locationDetails,
                //     location: e.target.value,
                //   })
                // }
                autoComplete="off"
                name="location"
                id="location"
              />
            </Autocomplete>
          )}
          {/* <span className="error" role="alert">
            {errors?.departureLocation?.message}
          </span> */}
        </div>
        {/* btn */}
        <button className="blue_button" onClick={() => handleAdd()}>
          {addressLoading ? "Adding..." : "Add"}
        </button>
      </div>
    </div>
  );
};

export default AddAddress;
