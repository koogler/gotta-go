import React from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow, } from "@react-google-maps/api";
import mapStyle from "./MapStyle"

// contains additional libraries to load
const libraries = ["places"]

// sets default style values
const mapContainerStyle = {
  width: '100vw',
  height: "100vh",
}
// sets center point (currently at union station)
const center = {
  lat: 43.645221007945544,
  lng: -79.38060752068597,
}
// sets map "options" for customization
const options = {
  styles: mapStyle,
  disableDefaultUi: true,
  zoomControl: true,
}


const MapElement = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error Loading Map";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
      >
      </GoogleMap>
    </div>
  );
}

export default MapElement;