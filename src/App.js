import React from 'react';
import { BrowserRouter, Route, Routes,Navigate  } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import Presence from './components/Presence';
import LoginPage from './components/Auth/LoginPage';



function App() {
  
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';
  /*return (
    <BrowserRouter>
    <Navbar />
      <div className='container'>
        
        <Routes>
          <Route path="/" exact element={<Homepage></Homepage>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/Presence" element={<Presence></Presence>} />
          <Route path="/gallery" element={isAuthenticated ? <Gallery /> : <Navigate  to="/login" />}/>
          <Route path="/services" element={<Schedule></Schedule>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );*/
  return (
    <BrowserRouter>
    <Navbar />
      <div className='container'>
        
        <Routes>
          <Route path="/" exact element={<Homepage></Homepage>} />
          <Route path="/Presence" element={<Presence></Presence>} />
          <Route path="/gallery" element={<Gallery></Gallery>}/>
          <Route path="/services" element={<Schedule></Schedule>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
