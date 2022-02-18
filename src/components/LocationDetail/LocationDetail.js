import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import LocationFind from "../../api/LocationFind";
import { LocationsContext } from "../../context/LocationsContext";

const LocationDetail = () => {

  const { id } = useParams()

  const { selectedLocation, setSelectedLocation } = useContext(LocationsContext)

  useEffect(() => {
    const fetchData = async () => {
      const res = await LocationFind.get(`/locations/${id}`)
      setSelectedLocation(res.data.data.locations)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>detail page</h1>
      {selectedLocation && selectedLocation.name}
    </div>
  )

}


export default LocationDetail