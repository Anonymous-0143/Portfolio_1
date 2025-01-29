import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import Timeline from './components/Timeline';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <LoadingScreen />
        <div className="min-h-screen transition-colors duration-300">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Projects />
                <Skills />
                <About />
                <Contact />
              </main>
            } />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;