import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import WhatsAppButton from './components/shared/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Technologies />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <WhatsAppButton phoneNumber="917046110694" />
    </div>
  );
}

export default App;