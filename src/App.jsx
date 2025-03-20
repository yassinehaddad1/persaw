import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Movies from './components/Movies/Movies';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import Reviews from './components/Reviews/Reviews';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Movies />
          <Features />
          <Reviews />
          <Pricing />
          <Contact />
        </main>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
