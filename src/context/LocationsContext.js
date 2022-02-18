import React, { useState, createContext } from "react"

export const LocationsContext = createContext()

export const LocationsContextProvider = props => {

  const [locations, setLocations] = useState([])

  const addLocations = (location) => {
    setLocations([...locations, location])
  }

  return (
    <LocationsContext.Provider value={{ locations, setLocations, addLocations }}>
      {props.children}
    </LocationsContext.Provider>
  )

}