import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Career from './pages/Career';
import ProjectDetails from './pages/ProjectDetails';

// Context
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/project/:projectId" element={<ProjectDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
