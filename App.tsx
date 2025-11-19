import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Theory from './components/Theory';
import Service from './components/Service';
import Profile from './components/Profile';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-mec-dark text-slate-200 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Theory />
        <Service />
        <Profile />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;