import React, { memo, useState } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { useForm } from "react-hook-form";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import Map from "../Map";
import Geocode from "react-geocode";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const libraries = ["places"];

const TerminalLocation = memo(({ setStep, setValue, getValues }) => {
  const { location, latitude, longitude } = getValues();

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({
    lat: latitude === "" ? 18.52043 : latitude,
    lng: longitude === "" ? 73.856743 : longitude,
  });
  const [searchValue, setSearchValue] = useState(null);
  const [userLocation, setUserLocation] = useState(location);
  const [selectFirstLocation, setSelectFirstLocation] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });

  // set up geocode
  useEffect(() => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
    Geocode.setLanguage("en");
    Geocode.fromLatLng(center.lat, center.lng).then((res) => {
      const address = res?.results[0]?.formatted_address;
      setUserLocation(address);
      setSelectFirstLocation(address);
      setValue("location", address);
    });
  }, []);

  async function searchLocation() {
    try {
      if (selectFirstLocation === null) {
        Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
        Geocode.setLanguage("en");
        const res = await Geocode.fromAddress(userLocation);
        const { formatted_address, geometry } = res?.results[0];
        const { lat, lng } = geometry?.location;
        setUserLocation(formatted_address);
        setSelectFirstLocation(formatted_address);
        setCenter({ lat, lng });
      }
    } catch (error) {
      const { formatted_address, geometry } = searchValue?.getPlace();
      const place = searchValue?.getPlace();
      const lat = geometry?.location?.lat();
      const lng = geometry?.location?.lng();
      setCenter({ lat, lng });
      setUserLocation(formatted_address);
      setSelectFirstLocation(formatted_address);
      setValue("location", formatted_address);
    }
  }

  // debounce select first location
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      searchLocation();
    }, [5000]);
    return () => clearTimeout(timer);
  }, [userLocation]);

  function getUserCurrentLocation() {
    if (navigator.geolocation) {
      const successCallback = (position) => {
        const { latitude, longitude } = position?.coords;
        setCenter({ lat: latitude, lng: longitude });
        Geocode.fromLatLng(latitude, longitude).then((res) => {
          const address = res?.results[0]?.formatted_address;
          setUserLocation(address);
        });
      };
      const errorCallback = (error) => {
        console.log(error);
      };

      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }

  function onLoad(autocomplete) {
    setSearchValue(autocomplete);
  }

  function onPlaceChanged() {
    if (searchValue != null) {
      if (searchValue?.getPlace()?.name === userLocation) {
        Geocode.fromAddress(searchValue?.getPlace()?.name)
          .then((res) => {
            const address = res?.results[0]?.formatted_address;
            const lat = res?.results[0]?.geometry?.location?.lat;
            const lng = res?.results[0]?.geometry?.location?.lng;
            setUserLocation(address);
            setCenter({ lat, lng });
          })
          .catch((err) => {
            return toast.error("Location not found!!!");
          });
      } else {
        const place = searchValue?.getPlace();
        const lat = place?.geometry?.location?.lat();
        const lng = place?.geometry?.location?.lng();
        setCenter({ lat, lng });
        Geocode.fromLatLng(lat, lng).then((res) => {
          const address = res?.results[0]?.formatted_address;
          setUserLocation(address);
          setSelectFirstLocation(address);
          setValue("location", address);
        });
      }
    } else {
      toast.error("Please enter text");
    }
  }

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    defaultValues: {
      location: userLocation,
      latitude: center.lat,
      longitude: center.lng,
    },
  });

  const onSubmit = () => {
    if (userLocation === "") {
      return toast.error("Enter a location");
    }
    setValue("location", userLocation);
    setValue("latitude", center.lat);
    setValue("longitude", center.lng);
    setStep(4);
  };

  return (
    <div className="w-full space-y-3">
      <p className="Title">Terminal location</p>
      <label className="Label">Location</label>
      <div className="w-full">
        {isLoaded && (
          <Autocomplete
            className="w-full outline-none focus:outline-none input_field"
            onPlaceChanged={onPlaceChanged}
            onLoad={onLoad}
          >
            <input
              className="w-full outline-none focus:outline-none p-1"
              type="text"
              placeholder="Zip code or city"
              value={userLocation}
              onChange={(e) => {
                setUserLocation(e.target.value);
                setValue("location", e.target.value);
                setSelectFirstLocation(null);
              }}
              name="location"
              id="location"
            />
          </Autocomplete>
        )}
        <span role="alert" className="error">
          {errors?.location?.message}
        </span>
      </div>
      <div
        onClick={() => getUserCurrentLocation()}
        className="inline-block cursor-pointer"
      >
        <TfiLocationPin className="text-2xl inline-block" />
        <span className="text-gray-600 mx-1 inline-block">
          Use current location
        </span>
      </div>

      {loadError !== undefined && isLoaded ? (
        <div className="w-full text-center text-2xl font-semibold p-4 mx-auto text-red-500">
          {loadError.message}
        </div>
      ) : !isLoaded && loadError === undefined ? (
        <div className="w-full text-center text-2xl font-semibold p-4 mx-auto">
          Loading Map...
        </div>
      ) : (
        <Map
          setMap={setMap}
          setCenter={setCenter}
          center={center}
          setUserLocation={setUserLocation}
          setValue={setValue}
        />
      )}
      {/* btns */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col mt-5 gap-2">
        <button
          type="button"
          onClick={() => {
            setStep(2);
          }}
          className="blue_button md:w-auto"
        >
          BACK
        </button>
        <p className="text-xs md:text-base">3 to 4</p>
        <button
          type="button"
          onClick={() => handleSubmit(onSubmit())}
          className="blue_button  md:w-auto"
        >
          NEXT
        </button>
      </div>
    </div>
  );
});

export default TerminalLocation;
