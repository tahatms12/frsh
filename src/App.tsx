import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Strategy from './components/Strategy';
import Portfolio from './components/Portfolio';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';

function App() {
  return (
    <Router>
      <div className="min-h-screen animated-bg relative">
        <FloatingParticles />
        <Header />
        <main>
          <Hero />
          <About />
          <Strategy />
          <Portfolio />
          <Tokenomics />
          <Roadmap />
          <Community />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;