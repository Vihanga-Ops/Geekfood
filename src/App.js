import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Quote from './components/Quote/Quote';
import './App.css';
 
function App() {
  const [activePage, setActivePage] = useState('Home');
 
  const renderPage = () => {
    switch (activePage) {
      case 'Quote':
        return <Quote />;
      case 'Home':
      default:
        return (
          <>
            <Hero />
            <InfoSection />
            <Cards />
          </>
        );
    }
  };
 
  return (
    <div className="App">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
      <Footer />
    </div>
  );
}
 
export default App;