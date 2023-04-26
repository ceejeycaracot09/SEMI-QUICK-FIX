//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import { Navbar } from 'reactstrap';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Services from './pages/services';
import Marketplace from './pages/marketplace';
import Booking from './pages/booking';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/services' Component={Services} />
        <Route path='/marketplace' Component={Marketplace} />
        <Route path='/booking' Component={Booking} />
        <Route path='/about'  Component={About} />
      </Routes>
    </Router>
  );
}

export default App;
