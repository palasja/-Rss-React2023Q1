import './App.css'
import React, { Component } from 'react'
import Home from './pages/home'
import About from './pages/about'
import Error from './pages/404'
import { Route, Routes } from 'react-router-dom'
import Header from '../src/components/header'

class App extends Component {
  render(){
    return <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    </>
  }
}
export default App;