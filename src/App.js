//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import { Navbar } from 'reactstrap';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Services from './pages/Home';
import Marketplace from './pages/Services';
import Booking from './pages/booking';
import About from './pages/about';
import Registration from './pages/SignIn/Registration';

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
        <Route path='/sign-in' Component={Registration} />
      </Routes>
    </Router>
  );
}

export default App;
