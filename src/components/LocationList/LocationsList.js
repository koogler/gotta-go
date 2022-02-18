import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"
import LocationFind from "../../api/LocationFind";
import { LocationsContext } from "../../context/LocationsContext";

const LocationList = () => {

  const { locations, setLocations } = useContext(LocationsContext)

  let navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await LocationFind.get("/locations")
        setLocations(res.data.data.locations)
      } catch (err) { }
    }
    fetchData()
  }, [])

  const handleLocationSelect = (id) => {
    navigate(`/locations/${id}`)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Your nearby porcelain thrones:
            </th>
          </tr>
        </thead>
        <tbody>
          {locations && locations.map((location) => {
            return (
              <tr onClick={() => handleLocationSelect(location.id)} key={location.id}>
                <td>{location.name}</td>
                <td>{location.address}</td>
                <td>{location.latitude}</td>
                <td>{location.longitude}</td>
                <td>{location.open_time}</td>
                <td>{location.close_time}</td>
                <td>{location.accessible}</td>
                <td>{location.changing_table}</td>
                <td>{location.sharps_disposal}</td>
                <td>{location.requires_purchase}</td>
                <td>{location.privacy_rating}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

}

export default LocationList