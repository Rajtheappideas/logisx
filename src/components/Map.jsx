import React, { useCallback, useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";

const Map = ({ setCenter, setMap, center, setUserLocation, setValue }) => {
  const mapRef = useRef(null);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const onMapLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  };

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onMapLoad}
      onUnmount={onUnmount}
      ref={mapRef}
      options={{
        maxZoom: 20,
        fullscreenControl: false,
        mapTypeControl: false,
        clickableIcons: false,
      }}
    >
      <Marker
        position={{ lat: center.lat, lng: center.lng }}
        draggable
        clickable
        onDragEnd={(e) => {
          setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() });
          Geocode.fromLatLng(e.latLng.lat(), e.latLng.lng()).then((res) => {
            const address = res?.results[0]?.formatted_address;
            setUserLocation(address);
            setValue("location", address);
          });
        }}
      ></Marker>
    </GoogleMap>
  );
};

export default Map;
