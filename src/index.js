import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./components/App/App"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LocationList from './components/LocationList/LocationsList'
import Dashboard from './components/Dashboard/Dashboard'
import LocationAdd from './components/LocationAdd/LocationAdd'
import LocationDetail from './components/LocationDetail/LocationDetail'
import { LocationsContextProvider } from './context/LocationsContext.js'
import TopNav from './components/Navbar/TopNav'
import Login from './components/Login/Login'


ReactDOM.render(
  <LocationsContextProvider>

    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/locationadd" element={<LocationAdd />} />
        <Route exact path="/locations/:id" element={<LocationDetail />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </LocationsContextProvider >




  , document.getElementById("root"));
