import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './ContextProvider';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Button from './Button';
import User from './User';

const LandingFile = () => {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/user/:id" element={<User />} />
            <Route exact path="/user/:id" element={<Home />} />
            <Route exact path="/user/About/:id" element={<About />} />
            <Route exact path="/user/Contact/:id" element={<Contact />} />
          </Routes>
          <Button />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
};

export default LandingFile;