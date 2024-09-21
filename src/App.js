import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Advisory from '../src/pages/Advisory';
// import Blog from '../src/pages/Blog';
// import Commercial from '../src/pages/Commercial';
import Home from '../src/pages/Home'
// import Footer from './components/Footer';
// import Contact from '../src/pages/Contact';
// import Residential from '../src/pages/Residential';
const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/advisory" element={<Advisory/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/residential" element={<Residential/>} />
        <Route path="/commercial" element={<Commercial/>} /> */}
      </Routes>
     
    </Router>
  );
};

export default App;
