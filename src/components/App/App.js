import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { LocationsContextProvider } from '../../context/LocationsContext';
import TopNav from '../Navbar/TopNav';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import LocationAdd from '../LocationAdd/LocationAdd';
import LocationDetail from '../LocationDetail/LocationDetail';
import LocationList from '../LocationList/LocationsList';


function App() {

  return (

    <div>
      <h1>Homepage</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/dashboard">dashboard</Link> |{" "}
        <Link to="/locationadd">add a location</Link>
        <LocationList />
      </nav>
    </div>

  );
}

export default App;
