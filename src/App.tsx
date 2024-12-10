import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingSpinner from './components/shared/LoadingSpinner';

// Lazy load non-critical components
const Technologies = lazy(() => import('./components/Technologies'));
const Services = lazy(() => import('./components/Services'));
const Reviews = lazy(() => import('./components/Reviews'));
const Contact = lazy(() => import('./components/Contact'));
const WhatsAppButton = lazy(() => import('./components/shared/WhatsAppButton'));

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <Technologies />
          <Services />
          <Reviews />
          <Contact />
          <WhatsAppButton phoneNumber="917046110694" />
        </Suspense>
      </main>
    </div>
  );
}

export default App;