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

const locations = [
  {
  id: 1,
  name: "Union Station",
  address: "55 Front St W, Toronto, ON",
  latitude: 43.6452210079455,
  longitude: -79.380607520686,
  open_time: "00:00:00",
  close_time: "23:59:59",
  accessible: true,
  changing_table: true,
  sharps_disposal: true,
  requires_purchase: false,
  privacy_rating: 2
  },

  {
  id: 2,
  name: "Starbucks",
  address: "300 Front St W Unit 1, Toronto, ON",
  latitude: 43.6439563893398,
  longitude: -79.3893305605622,
  open_time: "06:00:00",
  close_time: "20:00:00",
  accessible: true,
  changing_table: false,
  sharps_disposal: false,
  requires_purchase: false,
  privacy_rating: 3
  },

  {
  id: 3,
  name: "Swatow",
  address: "309 Spadina Ave., Toronto, ON",
  latitude: 43.6538376917012,
  longitude: -79.3981084013044,
  open_time: "11:00:00",
  close_time: "23:00:00",
  accessible: false,
  changing_table: false,
  sharps_disposal: false,
  requires_purchase: true,
  privacy_rating: 3
  }

];

function GeoLocate() {
  return <button></button>
}

const MapElement = () => {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  
  // store markers in state, default is "locations"
  const [markers, setMarkers] = React.useState(locations);

  // store a selected marker in state
  const [selected, setSelected] = React.useState(null);

  if (loadError) return "Error Loading Map";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={14} 
        center={center}
        options={options}
        onLoad={(e) => {
          setMarkers(prev => [...prev, {}])
        }}
      >

      {markers.map((marker) => 
      <Marker
        key={marker.id}
        position={{ lat: marker.latitude, lng: marker.longitude }}
        onClick={() => {
          setSelected(marker);
        }}

      />
      )}

      {selected ? (
      <InfoWindow position={{ lat: selected.latitude, lng: selected.longitude }} onCloseClick={() => {
        setSelected(null);
      }}>
        <div>
          <h2>{selected.name}</h2>
          <p>{selected.address}</p>
          <p>Accessible: {selected.accessible}</p>
          <p>Changing Table: {selected.changing_table}</p>
          <p>Privacy Rating: {selected.privacy_rating} / 5</p>
        </div>
      </InfoWindow>) : null}

      </GoogleMap>
    </div>
  );
}

export default MapElement;