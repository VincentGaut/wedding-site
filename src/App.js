import React from 'react';
import { BrowserRouter, Route, Routes,Navigate,useLocation   } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Information from './components/Informations';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import Presence from './components/Presence';
import LoginPage from './components/Auth/LoginPage';
import Organisation from './components/Organisation';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppContent />
      </BrowserRouter>
  );
};

const AppContent  = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';
  const noNavbarRoutes = ['/'];
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
    <div>
    {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <div className='container'>
        
        <Routes>
          <Route path="/" exact element={<LoginPage></LoginPage>} />
          <Route path="/Bienvenue" element={<Homepage></Homepage>} />
          <Route path="/Presence" element={<Presence></Presence>} />
          <Route path="/galerie" element={<Gallery></Gallery>}/>
          <Route path="/services" element={<Schedule></Schedule>} />
          <Route path="/infos" element={<Information></Information>} />
          <Route path="/organisation" element={<Organisation></Organisation>} />
        </Routes>
      </div>
      {!noNavbarRoutes.includes(location.pathname) && <Footer></Footer>}
      
      </div>
  );
}

export default App;
