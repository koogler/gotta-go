import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { LocationsContextProvider } from '../../context/LocationsContext';
import TopNav from '../Navbar/TopNav';
import LocationList from '../LocationList/LocationsList';


function App() {

  return (
    <LocationsContextProvider>
      <div>
        <TopNav></TopNav>
        <LocationList></LocationList>
        <Outlet />
      </div>
    </LocationsContextProvider>
  );
}

export default App;
