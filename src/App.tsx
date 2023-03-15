import './App.css'
import React, { Component } from 'react'
import Home from './pages/home'
import About from './pages/about'
import Error from './pages/404'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/about',
    element: <About />,
  }
]);

class App extends Component {
  render(){
    return <RouterProvider router={router} />
  }
}
export default App;