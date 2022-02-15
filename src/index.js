import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Preferences" element={<Preferences />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

