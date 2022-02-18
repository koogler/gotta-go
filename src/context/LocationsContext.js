import React, { useState, createContext } from "react"

export const LocationsContext = createContext()

export const LocationsContextProvider = (props) => {

  const [locations, setLocations] = useState([])

  const [selectedLocation, setSelectedLocation] = useState(null)

  const addLocations = (location) => {
    setLocations([...locations, location])
  }

  return (
    <LocationsContext.Provider value={{ locations, setLocations, addLocations, selectedLocation, setSelectedLocation }}>
      {props.children}
    </LocationsContext.Provider>
  )

}