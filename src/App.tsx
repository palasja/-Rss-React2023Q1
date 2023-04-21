import './App.css';
import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Error from './pages/404';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import NewCard from './pages/newCard';

const App = () => {
  return (
    <>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/NewCard" element={<NewCard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
