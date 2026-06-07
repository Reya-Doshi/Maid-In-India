import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import IntroScreen from './components/IntroScreen';
import ParticlesBackground from './components/ParticlesBackground';

import Home from './pages/Home';
import Services from './pages/Services';
import Verification from './pages/Verification';
import Story from './pages/Story';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className="flex-grow relative z-10 pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <Router>
      {!introFinished && <IntroScreen onComplete={() => setIntroFinished(true)} />}
      <div className={`relative min-h-screen flex flex-col transition-opacity duration-1000 ${introFinished ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <ParticlesBackground />
        
        {/* Floating Bubbles */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-red-100/40 rounded-full mix-blend-multiply filter blur-[80px] animate-float"></div>
          <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-orange-100/30 rounded-full mix-blend-multiply filter blur-[100px] animate-float-delayed"></div>
          <div className="absolute bottom-[20%] left-[20%] w-80 h-80 bg-rose-100/40 rounded-full mix-blend-multiply filter blur-[90px] animate-float-slow"></div>
        </div>

        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/safety" element={<Verification />} />
            <Route path="/story" element={<Story />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
