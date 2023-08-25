import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import CardList from '../CardList/CardList';
import AuthPage from '../AuthPage/AuthPage';
import './App.css';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <BrowserRouter>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cardlist/:setId" element={<CardList />} />
        <Route path="/login" element={<AuthPage setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}
