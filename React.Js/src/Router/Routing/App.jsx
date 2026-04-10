import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,About,Contact,Services} from './Pages'
import Navbar from './Navbar'
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
};

export default App;
