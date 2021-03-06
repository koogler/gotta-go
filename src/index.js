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
import Register from './components/Register/Register'
import Middle from './components/Middle/Middle'
import Logout from './components/Logout/Logout'


ReactDOM.render(
  <LocationsContextProvider>

    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/locationadd" element={<LocationAdd />} />
        <Route exact path="/locations/:id" element={<LocationDetail />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path='/middle' element={<Middle />} />
        <Route exact path='/logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
  </LocationsContextProvider >




  , document.getElementById("root"));
