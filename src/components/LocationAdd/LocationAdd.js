import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LocationFind from "../../api/LocationFind";
import { LocationsContext } from "../../context/LocationsContext";
import useToken from "../Dashboard/useToken";
import Login from "../Login/Login";

import './LocationAdd.scss';

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

  const { token, setToken } = useToken();

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
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (err) { }
  }

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <div className="login-form">
        <div className="title">Add to our ever expanding database!</div>
      </div>
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
            <p>Is there a changing station?</p>
            <input
              value={changingTable}
              onChange={handleChangeTwo}
              type="checkbox" />
          </div>

          <div className="col">
            <p>Is there a sharps disposal?</p>
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
            <select
              id="rating"
              className="custom-select"
              value={privacyRating}
              onChange={(event) => setPrivacyRating(event.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <button onClick={handleSubmit} type="submit" className="button">Add!</button>
        </div>
      </form>
    </div>
  )

}

export default LocationAdd
