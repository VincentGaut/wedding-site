import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog'
import Home from './components/Home';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import Presence from './components/Presence';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          <Route path="/Blog" element={<Blog></Blog>} />
          <Route path="/Presence" element={<Presence></Presence>} />
          <Route path="/gallery" element={<Gallery></Gallery>} />
          <Route path="/services" element={<Schedule></Schedule>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
