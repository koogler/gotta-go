import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LocationFind from "../../api/LocationFind";
import { LocationsContext } from "../../context/LocationsContext";

const LocationAdd = () => {

  const { addLocations } = useContext(LocationsContext)

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [openTime, setOpenTime] = useState("")
  const [closeTime, setCloseTime] = useState("")
  const [accessible, setAccessible] = useState(false)
  const [changingTable, setChangingTable] = useState(false)
  const [sharpsDisposal, setSharpsDisposal] = useState(false)
  const [requiresPurchase, setRequiresPurchase] = useState(false)
  const [privacyRating, setPrivacyRating] = useState(0)

  const handleChangeOne = () => {
    setAccessible(!accessible)
  }

  const handleChangeTwo = () => {
    setChangingTable(!changingTable)
  }

  const handleChangeThree = () => {
    setSharpsDisposal(!sharpsDisposal)
  }

  const handleChangeFour = () => {
    setRequiresPurchase(!requiresPurchase)
  }

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await LocationFind.post("/locations",
        {
          name,
          address,
          latitude,
          longitude,
          open_time: openTime,
          close_time: closeTime,
          accessible,
          changing_table: changingTable,
          sharps_disposal: sharpsDisposal,
          requires_purchase: requiresPurchase,
          privacy_rating: privacyRating
        })
      addLocations(res.data.data.location)
    } catch (err) { }

    setTimeout(() => { navigate(`/`) }, 1000)

  }

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={event => setName(event.target.value)}
              type="text"
              className="form-control"
              placeholder="Location Name" />
          </div>

          <div className="col">
            <input
              value={address}
              onChange={event => setAddress(event.target.value)}
              type="text"
              className="form-control"
              placeholder="Address" />
          </div>

          <div className="col">
            <input
              value={latitude}
              onChange={event => setLatitude(event.target.value)}
              type="float"
              className="form-control"
              placeholder="Latitude" />
          </div>

          <div className="col">
            <input
              value={longitude}
              onChange={event => setLongitude(event.target.value)}
              type="float"
              className="form-control"
              placeholder="Longitude" />
          </div>

          <div className="col">
            <input
              value={openTime}
              onChange={event => setOpenTime(event.target.value)}
              type="time"
              className="form-control"
              placeholder="Opening Time" />
          </div>

          <div className="col">
            <input
              value={closeTime}
              onChange={event => setCloseTime(event.target.value)}
              type="time"
              className="form-control"
              placeholder="Closing Time" />
          </div>

          <div className="col">
            <p>Is the washroom handicapped friendly?</p>
            <input
              value={accessible}
              onChange={handleChangeOne}
              type="checkbox" />
          </div>

          <div className="col">
            <p>Is there a changing table?</p>
            <input
              value={changingTable}
              onChange={handleChangeTwo}
              type="checkbox" />
          </div>

          <div className="col">
            <p>Is there a sharp object disposal?</p>
            <input
              value={sharpsDisposal}
              onChange={handleChangeThree}
              type="checkbox" />
          </div>

          <div className="col">
            <p>Is a purchase required?</p>
            <input
              value={requiresPurchase}
              onChange={handleChangeFour}
              type="checkbox" />

          </div>

          <div className="col">
            <input
              value={privacyRating}
              onChange={event => setPrivacyRating(event.target.value)}
              type="number"
              className="form-control"
              placeholder="Privacy Rating(1-5)" />
          </div>

          <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add a new location!</button>
        </div>
      </form>
    </div>
  )

}

export default LocationAdd