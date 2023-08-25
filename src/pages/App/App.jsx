// import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Dashboard from "../Dashboard/Dashboard.jsx"
// import Home from "../Home/Home"
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter> 
      {/* <Home /> */}
      <Dashboard />
    </BrowserRouter>
    </>
  )
}

export default App
