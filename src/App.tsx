import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import PriceTicker from './components/PriceTicker';
import TrainingCatalogPage from './pages/training';
import TrainingCoursePage from './pages/training/[courseSlug]';

function App() {
  return (
    <Router>
      <div className="min-h-screen animated-bg relative">
        <FloatingParticles />
        <Header />
        <PriceTicker />
        <Routes>
          <Route
            path="/"
            element={(
              <main>
                <Hero />
                <About />
                <Strategy />
                <Portfolio />
                <Tokenomics />
                <Roadmap />
                <Community />
              </main>
            )}
          />
          <Route path="/training" element={<TrainingCatalogPage />} />
          <Route path="/training/:courseSlug" element={<TrainingCoursePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
