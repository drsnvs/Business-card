import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BusinessCard from './components/BusinessCard';
import Collection from './components/Collection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Loader from './components/Loader'; // Import the Loader component

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate a loading time (for example, fetching data)
    setTimeout(() => {
      setIsLoading(false); // After 3 seconds, loading completes
    }, 5173);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        {isLoading ? (
          <Loader />  // Show the loader while loading
        ) : (
          <>
            <Navbar />
            <main>
              <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
                <BusinessCard />
              </section>
              
              <section id="about" className="py-20 px-4">
                <About />
              </section>
              
              <section id="collection" className="py-20 px-4 bg-slate-900/90">
                <Collection />
              </section>
              
              <section id="contact" className="py-20 px-4">
                <Contact companyName={'Shree Hari Creation'} phone={'+91 97276 32511'} email={'jigar.owner@gmail.com'} address={'Soni ni chali, Ahmedabad'} businessHours={'Mon - Sat: 10am - 7pm'} />
              </section>
            </main>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
