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
import { TfiLocationPin } from "react-icons/tfi";
import { socket } from "../Socket";

const LiveTrackMap = ({ setError }) => {
  const { singleJobDetails } = useSelector((s) => s.root.bid);

  const [directions, setDirections] = useState(null);
  const [origin, setOrigin] = useState({
    lat: singleJobDetails?.departureCoords?.coordinates[1],
    lng: singleJobDetails?.departureCoords?.coordinates[0],
  });
  const [destination, setDestination] = useState({
    lat: singleJobDetails?.arrivalCoords?.coordinates[1],
    lng: singleJobDetails?.arrivalCoords?.coordinates[0],
  });
  const [liveTrackingStatus, setLiveTrackingStatus] = useState("continue");

  const { user } = useSelector((s) => s.root.auth);

  const mapRef = useRef(null);

  const containerStyle = {
    width: "100%",
    height: "60vh",
  };

  const onMapLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds({
      lat: singleJobDetails?.departureCoords?.coordinates[1],
      lng: singleJobDetails?.departureCoords?.coordinates[0],
    });
    map.fitBounds(bounds);
  };

  // const places = [
  //   {
  //     latitude: singleJobDetails?.departureCoords?.coordinates[1],
  //     longitude: singleJobDetails?.departureCoords?.coordinates[0],
  //   },
  //   {
  //     latitude: singleJobDetails?.arrivalCoords?.coordinates[1],
  //     longitude: singleJobDetails?.arrivalCoords?.coordinates[0],
  //   },
  // ];

  // const waypoints = places.map((p) => ({
  //   location: { lat: p.latitude, lng: p.longitude },
  //   stopover: true,
  // }));
  // const origin = waypoints.shift().location;
  // const destination = waypoints.pop().location;

  const onUnmount = useCallback((map) => {
    //     setMap(null);
  }, []);

  useEffect(() => {
    if (!socket.connected) socket.connect();
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
          }
        }
      }
    );
    socket.emit("join", { id: user?._id });

    socket.on("jobAction", (jobAction) => {
      setLiveTrackingStatus(jobAction?.liveTracking);
    });
    socket.on("receiveLiveTracking", (data) => {
      if (
        singleJobDetails?.jobStatus === "wayToPickUp" &&
        (liveTrackingStatus === "continue" || liveTrackingStatus === "start")
      ) {
        setOrigin({
          lat: parseFloat(data?.latitude),
          lng: parseFloat(data?.longitude),
        });
      } else if (
        singleJobDetails?.jobStatus === "wayToDelivery" &&
        (liveTrackingStatus === "continue" || liveTrackingStatus === "start")
      ) {
        setOrigin({
          lat: parseFloat(data?.latitude),
          lng: parseFloat(data?.longitude),
        });
        // setDestination({
        //   lat: parseFloat(data?.latitude),
        //   lng: parseFloat(data?.longitude),
        // });
      }
    });
    return () => {
      setError(null);
      setDirections(null);
    };
    /* eslint-enable */
  }, [origin, destination, socket, liveTrackingStatus]);

  // start, wayToPickUp, truckerArrived, loading, loadingComplete, wayToDelivery, unloading, complete

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
        streetViewControl: false,
        streetViewControlOptions: false,
      }}
    >
      <DirectionsRenderer
        directions={directions}
        options={{
          polylineOptions: {
            strokeColor: "purple",
            strokeWeight: 3,
            geodesic: true,
            // icons: [
            //   {
            //     icon: {
            //       scale: 1.5,
            //       path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            //       anchor: { x: 12, y: 20 },
            //       strokeWeight: 1,
            //       strokeColor: "#008000",
            //       fillColor: "#008000",
            //       fillOpacity: 0.6,
            //     },
            //     offset: "100%",
            //   },
            //   {
            //     icon: {
            //       scale: 1.5,
            //       path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            //       anchor: { x: 12, y: 20 },
            //       strokeWeight: 1,
            //       strokeColor: "#6A0DAD",
            //       fillColor: "#6A0DAD",
            //       fillOpacity: 0.6,
            //     },
            //     offset: "0%",
            //     fixedRotation: true,
            //   },
            // ],
          },

          markerOptions: {
            // animation: window.google.maps.Animation.DROP,
          },
          // suppressMarkers: true,
        }}
      ></DirectionsRenderer>
    </GoogleMap>
  );
};

export default LiveTrackMap;
