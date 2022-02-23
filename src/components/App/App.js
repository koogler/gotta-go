import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { LocationsContextProvider } from '../../context/LocationsContext';

import {
  Link
} from "react-router-dom";

import LocationList from '../LocationList/LocationsList';
import MapElement from '../Map/Map';
import Checkboxes from '../Checkboxes/checkboxes';

function App() {

  return (

    <div className="layout">
      {/* <h1>Homepage</h1> */}
      <section className="sidebar">
        <h4 className="sidebar--centered">
          Filter Search By:
        </h4>
        <h6 className="sidebar--centered">
          <Checkboxes />
        </h6>
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
