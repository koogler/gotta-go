import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import LocationFind from "../../api/LocationFind";
import { LocationsContext } from "../../context/LocationsContext";
import AddReview from "../AddReview/AddReview";
import LocationReviews from "../LocationReviews/LocationReviews";

import "./LocationDetail.scss"

const LocationDetail = () => {

  const { id } = useParams()

  const { selectedLocation, setSelectedLocation } = useContext(LocationsContext)

  let date = new Date;

  function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time.pop() // Remove seconds
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }


  useEffect(() => {
    const fetchData = async () => {
      const res = await LocationFind.get(`/locations/${id}`)
      setSelectedLocation(res.data.data)
    }
    fetchData()
  }, [])

  return (
    <div className="location-detail-container">
      {selectedLocation && (
        <>
          <h1 className="location--name">
            {selectedLocation.locations.name}
          </h1>
          <h3 className="location--address">
            {selectedLocation.locations.address}
          </h3>
          <h4 className="location-value">Hours:</h4>
          <h4 className="location-value">{tConvert(selectedLocation.locations.open_time)} - {tConvert(selectedLocation.locations.close_time)}</h4>
          <h4 className="location-value">{date.toLocaleTimeString('en-US', { hour12: false }) >= selectedLocation.locations.open_time && date.toLocaleTimeString('en-US', { hour12: false }) <= selectedLocation.locations.close_time
            ? "🟢 Open Now"
            : "❌ Currently Closed"
          }
          </h4>
          <h4><br/></h4>
          <h4 className="location-value">{selectedLocation.locations.accessible ? "Accessible Location: ✅" : null}</h4>
          <h4 className="location-value">{selectedLocation.locations.changing_table ? "Changing Table Available: ✅" : null}</h4>
          <h4 className="location-value">{selectedLocation.locations.sharps_disposal ? "Sharps Disposal Bin On Site: ✅" : null}</h4>
          <h4 className="location-value">{selectedLocation.locations.requires_purchase ? "Purchase Required" : "Free for Public Use: ✅"}</h4>
          <AddReview />
          <div className="reviews--box">
            <LocationReviews reviews={selectedLocation.reviews} />
          </div>
        </>
      )}
    </div>
  )

}


export default LocationDetail