"use client";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState, useCallback, memo, useEffect } from "react";

const containerStyle = {
    width: "100%",
    height: "100vh",
};

const center = {
    lat: -19.84361,
    lng: 34.83889,
};

// function MyComponent() {
//     const [location, setLocation]: any = useState({
//         latitude: null,
//         longitude: null,
//     });

//     const { isLoaded } = useJsApiLoader({
//         id: "google-map-script",
//         googleMapsApiKey: "AIzaSyDxaOcQLh6nyb5JEy74Ooif0WoAUPmE0ko",
//     });

//     useEffect(() => {
//         const getLocation = () => {
//             if (navigator.geolocation) {
//                 navigator.geolocation.getCurrentPosition((position) => {
//                     console.log(position);
//                     setLocation({
//                         latitude: position.coords.latitude,
//                         longitude: position.coords.longitude,
//                     });
//                 });
//             } else {
//                 console.log("Geolocation is not supported by this browser.");
//             }
//         };
//         getLocation();
//     }, []);

//     const myLocation = {
//         lat: location.latitude || -19.84361,
//         lng: location.longitude || 34.83889,
//     };

//     console.log(myLocation);

//     const [map, setMap] = useState(null);

//     const onLoad = useCallback(function callback(map: any) {
//         // This is just an example of getting and using the map instance!!! don't just blindly copy!
//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);

//         setMap(map);
//     }, []);

//     const onUnmount = useCallback(function callback(map: any) {
//         setMap(null);
//     }, []);

//     return isLoaded ? (
//         <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={myLocation}
//             zoom={20}
//             onLoad={onLoad}
//             onUnmount={onUnmount}
//             options={{
//                 // zoomControl: false,
//                 streetViewControl: false,
//                 fullscreenControl: false,
//             }}
//         >
//             {/* Child components, such as markers, info windows, etc. */}
//             <Marker
//                 position={myLocation}
//                 label={"cidade bonita"}
//                 onClick={() => {
//                     // Mostre a caixa de informações
//                     const infoWindow = new google.maps.InfoWindow({
//                         content: "Esta é uma caixa de informações",
//                     });
//                     infoWindow.open(map);
//                 }}
//             />
//             <></>
//         </GoogleMap>
//     ) : (
//         <></>
//     );
// }

// export default memo(MyComponent)

import React from 'react'
import { GoogleMap } from "react-google-maps";

export default function page() {



  return (
    <GoogleMap
    key={GOOGLE_MAPS_API_KEY}
    center={[-22.916667, -43.200000]}
    zoom={12}
  >
    <Marker position={[-22.916667, -43.200000]} />
  </GoogleMap>
  )
}
