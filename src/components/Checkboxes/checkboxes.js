import React, { useEffect, useState, useContext } from "react";
import LocationFind from "../../api/LocationFind";
import { LocationsContext } from "../../context/LocationsContext";

// actual checkbox component
const Checkboxes = () => {

  const ACCESSIBLE = "Accessible Location";
  const CHANGING = "Has Changing Table";
  const SHARPS = "Has Sharps Disposal";
  const ISOPEN = "Is Currently Open";
  let date = new Date;


  // brings in the locations from context
  const { locations, setLocations } = useContext(LocationsContext)

  // sets state of checkboxes
  const [checked, setChecked] = useState([{
    name: ACCESSIBLE,
    checked: false
  },
  {
    name: CHANGING,
    checked: false
  },
  {
    name: SHARPS,
    checked: false
  },
  {
    name: ISOPEN,
    checked: false
  }
  ]);


  // handles the change of state between checked and unchecked
  const handleChange = ({ name, checked }) => {
    setChecked((previousChecked) => {
      return previousChecked.map(checkbox => {
        if (checkbox.name === name) {
          checkbox.checked = checked
        }
        return checkbox
      })
    })

    // checks if accessible checkbox is set
    if ((name === ACCESSIBLE)) {
      if (checked) {
        const filteredLocations = locations.map((location) => {
          return !location.accessible ? { ...location, visible: false } : location
        })
        setLocations(filteredLocations)
      }
      else {
        const filteredLocations = locations.map((location) => {
          return !location.accessible ? { ...location, visible: true } : location
        })
        setLocations(filteredLocations)
      }
    }

    // checks if changing table checkbox is set
    if ((name === CHANGING)) {
      if (checked) {
        const filteredLocations = locations.map((location) => {
          return !location.changing_table ? { ...location, visible: false } : location
        })
        setLocations(filteredLocations)
      }
      else {
        const filteredLocations = locations.map((location) => {
          return !location.changing_table ? { ...location, visible: true } : location
        })
        setLocations(filteredLocations)
      }
    }

    // checks if sharps disposal is set
    if ((name === SHARPS)) {
      if (checked) {
        const filteredLocations = locations.map((location) => {
          return !location.sharps_disposal ? { ...location, visible: false } : location
        })
        setLocations(filteredLocations)
      }
      else {
        const filteredLocations = locations.map((location) => {
          return !location.sharps_disposal ? { ...location, visible: true } : location
        })
        setLocations(filteredLocations)
      }
    }

    // checks if location is open
    if ((name === ISOPEN)) {
      if (checked) {
        const filteredLocations = locations.map((location) => {
          return !(date.toLocaleTimeString('en-US', { hour12: false }) >= location.open_time && date.toLocaleTimeString('en-US', { hour12: false }) <= location.close_time) ? { ...location, visible: false } : location
        })
        setLocations(filteredLocations)
      }
      else {
        const filteredLocations = locations.map((location) => {
          return !(date.toLocaleTimeString('en-US', { hour12: false }) >= location.open_time && date.toLocaleTimeString('en-US', { hour12: false }) <= location.close_time) ? { ...location, visible: true } : location
        })
        setLocations(filteredLocations)
      }
    }

  }



  return (
    <div className="checkbox"> {
      checked.map(checkbox => {
        return (
          <label>
            {
              checkbox.name
            }
            <input type="checkbox"
              onChange={() => handleChange({ ...checkbox, checked: !checkbox.checked })}
            />
            <br />
          </label>
        )
      })
    }
    </div>
  )
}

export default Checkboxes;