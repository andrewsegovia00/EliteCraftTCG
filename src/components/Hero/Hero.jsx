import './Hero.css'
import charizardCard from "../../assets/charizardCard.png"
import pokekidCard from "../../assets/pokekidCard.png"
import cinderaceCard from "../../assets/cinderaceCard.png"
import { Link } from 'react-router-dom'

export default function Hero() {

    return (
    <>
      <div className="hero">
          <div className="buildText">build</div>
          <div className="pokemonCardSet">
              <img src={pokekidCard} className="card2 pokemonCard1" />
              <img src={charizardCard} className="card2 pokemonCard2" />
              <img src={cinderaceCard} className="card2 pokemonCard3" />
          </div>
          <div className="subText">Build your dream decks and share with the TCG community. Choose from a range of booster packs and get feedback from others on whether or not your deck is balanced or a match for the meta.</div>
          <Link to={'/'} ><button className="Account">create account</button>
          </Link>
      </div>
    </>
    );
  }