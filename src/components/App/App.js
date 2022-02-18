import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { LocationsContextProvider } from '../../context/LocationsContext';

import {
  Link
} from "react-router-dom";

import LocationList from '../LocationList/LocationsList';


function App() {

  return (

    <div>
      <h1>Homepage</h1>
      <LocationList />
    </div >

  );
}

export default App;
