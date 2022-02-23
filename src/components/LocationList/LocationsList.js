import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"
import LocationFind from "../../api/LocationFind";
import { LocationsContext } from "../../context/LocationsContext";

import './LocationList.scss';

const LocationList = () => {

  const { locations, setLocations } = useContext(LocationsContext)

  let navigate = useNavigate()

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

  const handleLocationSelect = (id) => {
    navigate(`/locations/${id}`)
  }

  function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time.pop() // Remove seconds
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }

  const twentyFourHours = (open, close) => {
    open = "12:00:00" ? true : false
    close = "11:59:00" || "11:59:59" ? true : false
    if (open && close) {
      return "Open 24 Hours"
    }
  }
  
  return (
    <div>
      <table>
        <tbody>
          {locations && locations.filter((location) => location.visible).map((location) => {
            return (
              <tr onClick={() => handleLocationSelect(location.id)} key={location.id} className="location-list__item">
                  
                  <td className="title">{location.name}</td>
                  <td>{location.address}</td>
                  {/* <td>{location.latitude}</td>
                  <td>{location.longitude}</td> */}
                  <td>Hours: {tConvert(location.open_time)} - {tConvert(location.close_time)}</td>
                  <td></td>
                  {/* <td>Is it wheelchair accessible?{'✅ '.repeat(location.accessible)}</td>
                  <td>Available changing table?{'✅ '.repeat(location.changing_table)}</td>
                  <td>Has sharp item disposal?{'✅ '.repeat(location.sharps_disposal)}</td>
                  <td>Requires purchase before using bathroom?{'✅ '.repeat(location.requires_purchase)}</td> */}
                  <td>Rating: {location.privacy_rating}</td>
        
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

}

export default LocationList