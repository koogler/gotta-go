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
                <td>Is it wheelchair accessible?{'✅ '.repeat(location.accessible)}</td>
                <td>Available changing table?{'✅ '.repeat(location.changing_table)}</td>
                <td>Has sharp item disposal?{'✅ '.repeat(location.sharps_disposal)}</td>
                <td>Requires purchase before using bathroom?{'✅ '.repeat(location.requires_purchase)}</td>
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