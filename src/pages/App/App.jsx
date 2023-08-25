// import { useState } from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import CardList from "../CardList/CardList.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx"
// import Home from "../Home/Home"
import './App.css'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Home /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/cardlist/:setId" element={<CardList />} />
      </Routes>
    </BrowserRouter>
  )
}


