import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Packages from './components/Packages/Packages';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import './styles/global.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Packages />
            </>
          } />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </Router>
      <WhatsAppButton />
    </>
  );
}

export default App;
