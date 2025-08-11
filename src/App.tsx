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
        <gecko-coin-price-marquee-widget
          locale="en"
          dark-mode="true"
          outlined="true"
          coin-ids="shiba-inu,pepe,pudgy-penguins,bonk,floki,spx6900,fartcoin,dogwifcoin,dogecoin,dog-go-to-the-moon-rune,turbo,peanut-the-squirrel,pump-fun"
          initial-currency="usd"
        />
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