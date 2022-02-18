import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { LocationsContextProvider } from '../../context/LocationsContext';

import {
  Link
} from "react-router-dom";

import LocationList from '../LocationList/LocationsList';
import MapElement from '../Map/Map';

function App() {

  return (

    <div>
      <h1>Homepage</h1>
      <LocationList />
      <MapElement />
    </div >

  );
}

export default App;
