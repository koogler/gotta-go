import React, { useEffect, useContext } from "react";
import LocationFind from "../../api/LocationFind";
import { LocationsContext } from "../../context/LocationsContext";

import { GoogleMap, useLoadScript, Marker, InfoWindow, } from "@react-google-maps/api";
import mapStyle from "./MapStyle"

// contains additional libraries to load
const libraries = ["places"]

// sets default style values
const mapContainerStyle = {
  width: '76vw',
  height: "87vh", //91vh
}
// sets center point (currently at union station)
const center = {
  lat: 43.645221007945544,
  lng: -79.38060752068597,
}
// sets map "options" for customization
const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
}

let date = new Date;

function GeoLocate() {
  return <button>

  </button>
}

const MapElement = () => {


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const { locations, setLocations } = useContext(LocationsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await LocationFind.get("/locations")
        let returnedLocations = res.data.data.locations
        returnedLocations = returnedLocations.map((location) => {return {...location, visible: true}})
        setLocations(returnedLocations)
      } catch (err) { }
    }
    fetchData()
  }, [])

  // set markers as locations for processing...
  const markers = locations;

  // store a selected marker in state
  const [selected, setSelected] = React.useState(null);

  // checks for map load errors
  if (loadError) return "Error Loading Map";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
      >

        {locations.filter((location) => location.visible).map((marker) =>
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
              <h3>{selected.name}</h3>
              <hr />
              <p>{selected.address}<br />
              {date.toLocaleTimeString('en-US', { hour12: false }) >= selected.open_time && date.toLocaleTimeString('en-US', { hour12: false }) <= selected.close_time 
              ? "🟢 Open Now" 
              : "❌ Currently Closed"
              }
                <hr />
                Accessible: {selected.accessible ? "✅" : "❌"}<br />
                Changing Table: {selected.changing_table ? "✅" : "❌"}<br />
                Sharps Disposal: {selected.sharps_disposal ? "✅" : "❌"}<br />
                Privacy Rating: {"⭐".repeat(selected.privacy_rating) + "★".repeat(5 - selected.privacy_rating)}</p>
            </div>
          </InfoWindow>) : null}

      </GoogleMap>
    </div>
  );
}

export default MapElement;