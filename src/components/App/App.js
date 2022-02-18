import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { LocationsContextProvider } from '../../context/LocationsContext';

import {
  Link
} from "react-router-dom";

import LocationList from '../LocationList/LocationsList';
import { Navbar } from 'react-bootstrap';


function App() {

  return (

    <div>
      <h1>Homepage</h1>
      <Link to="/dashboard">dashboard</Link> |{" "}
      <Link to="/locationadd">add a location</Link>
      <LocationList />
    </div >

  );
}

export default App;
