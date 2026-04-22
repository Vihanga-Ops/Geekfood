import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <InfoSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
