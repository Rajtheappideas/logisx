import React, { useCallback, useRef } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const LiveTrackMap = ({ setCenter, center, setError }) => {
  const [directions, setDirections] = useState(null);

  const { singleJobDetails } = useSelector((s) => s.root.bid);

  const mapRef = useRef(null);

  const containerStyle = {
    width: "100%",
    height: "60vh",
  };

  const onMapLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  };

  const places = [
    {
      latitude: singleJobDetails?.departureCoords?.coordinates[1],
      longitude: singleJobDetails?.departureCoords?.coordinates[0],
    },
    {
      latitude: singleJobDetails?.arrivalCoords?.coordinates[1],
      longitude: singleJobDetails?.arrivalCoords?.coordinates[0],
    },
  ];
  const waypoints = places.map((p) => ({
    location: { lat: p.latitude, lng: p.longitude },
    stopover: true,
  }));
  const origin = waypoints.shift().location;
  const destination = waypoints.pop().location;

  const onUnmount = useCallback((map) => {
    //     setMap(null);
  }, []);

  useEffect(() => {
    /* eslint-disable */
    const directionService = new window.google.maps.DirectionsService();
    directionService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
          setError(null);
          return;
        } else {
          if (status === "ZERO_RESULTS" || result.routes.length === 0) {
            setError("Can't find a route for departure to arrival");
            //     toast.error("Can't find a route for your destination");
          }
        }
      }
    );
    return () => {
      setError(null);
      setDirections(null);
    };
    /* eslint-enable */
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={5}
      center={origin}
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
      <DirectionsRenderer
        directions={directions}
        options={{
          polylineOptions: {
            strokeColor: "blue",
            strokeWeight: 3,
            geodesic: true,
          },
          markerOptions: {
            animation: window.google.maps.Animation.DROP,
          },
        }}
      ></DirectionsRenderer>
    </GoogleMap>
  );
};

export default LiveTrackMap;
