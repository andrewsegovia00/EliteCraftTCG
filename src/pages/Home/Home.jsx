// import { useState } from 'react'
// import { Routes, Route } from 'react-router-dom';
// import { getUser } from '../../utilities/users-service';
// import AuthPage from '../AuthPage/AuthPage';
// import NavBar from '../../components/NavBar/NavBar';
// import CardList from "../CardList/CardList.jsx";
// import Dashboard from "../Dashboard/Dashboard.jsx"
import { Link } from 'react-router-dom';
import Hero from "../../components/Hero/Hero.jsx"
import './Home.css'

export default function Home() {
  // const [user, setUser] = useState(getUser());

    return (
      <main className="App">
        {/* <NavBar user={user} setUser={setUser} /> */}
        <Hero />
        {/* { user ?
            <>
              <Routes>
                <Hero />
                <Route path="/" element={<Dashboard />} />
                <Route path="/cardlist/:setId" element={<CardList />} />
              </Routes>
            </>
            :
            <AuthPage setUser={setUser} />
        } */}
      </main>
    );
  }