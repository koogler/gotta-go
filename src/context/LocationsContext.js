import React, { useState, createContext } from "react"

export const LocationsContext = createContext()

export const LocationsContextProvider = (props) => {

  const [locations, setLocations] = useState([])

  const [selectedLocation, setSelectedLocation] = useState(null)

  const [database, setDatabase] = useState([])

  const addLocations = (location) => {
    setLocations([...locations, location])
  }

  const addUsers = (user) => {
    setDatabase([...database, user])
  }

  return (
    <LocationsContext.Provider value={{ locations, setLocations, addLocations, selectedLocation, setSelectedLocation, database, setDatabase, addUsers }}>
      {props.children}
    </LocationsContext.Provider>
  )

}