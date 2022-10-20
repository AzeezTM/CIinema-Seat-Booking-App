import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import axios from "axios"
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import { Routes, Route, Outlet } from "react-router-dom"
import Tickets from './Components/Tickets';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Number from './Components/Number';
import Paystack from './Components/Paystack';
import Seat from './Components/Seat';
import Booking from './Components/Lexy';
import Footer from './Components/Footer/footer';

function App() {

  return (
    <>
      <div>
        {/* 
       {/* / <Number/> */}
        <Navbar />


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='tickets/:id' element={<Tickets />} />
          <Route path='contact' element={<Contact />} />
          <Route path='seat/:id' element={<Seat />} />
          <Route path='paystack' element={<Paystack />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
        </Routes>
        <Newsletter />
        <Footer />

        {/* <Outlet /> */}
       
        {/* <Paystack/> */}
      </div>
    </>
  );
}

export default App;
