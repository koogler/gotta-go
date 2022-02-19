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

    <div className="layout">
      {/* <h1>Homepage</h1> */}
      <section className="sidebar">
        <h1 className="sidebar--centered">Menu</h1>
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <LocationList />
        </nav>
      </section>
      <section className="map">
        <MapElement />
      </section>
    </div >

  );
}

export default App;
