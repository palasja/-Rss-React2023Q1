import './App.css';
import React, { Component, ReactNode } from 'react';
import Home from './pages/home';
import About from './pages/about';
import Error from './pages/404';
import { Route, Routes } from 'react-router-dom';
import Header from '../src/components/header';
import Footer from './components/footer/footer';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
  }
}
export default App;
