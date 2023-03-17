import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";


function App() {
  return (
    <>
    <div className='background'>
      <Router>
        
        <Header />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>

        <Footer /> 
      </Router>
      </div>
    </>
    
  );
}

export default App;
