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

  useEffect(() => {
    const fetchData = async () => {
      const res = await LocationFind.get(`/locations/${id}`)
      setSelectedLocation(res.data.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      {selectedLocation && (
        <>
          <h1 className="location-name">
            {selectedLocation.locations.name}
          </h1>
          <div className="reviews">
            <LocationReviews reviews={selectedLocation.reviews} />
          </div>
          <AddReview />  
        </>
      )}
    </div>
  )

}


export default LocationDetail