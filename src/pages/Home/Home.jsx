import { Link } from 'react-router-dom';
import Hero from "../../components/Hero/Hero.jsx"
import './Home.css'

export default function Home({user}) {

    return (
      <main className="App">
        <Hero user={user} />
      </main>
    );
  }