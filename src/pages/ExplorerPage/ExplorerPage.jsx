import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllDecks } from '../../utilities/decks';

export default function Dashboard({ user }) {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function fetchDecks() {
      const deckData = await getAllDecks();
      // console.log(deckData);
      const deckDataArr = deckData.decks;
      console.log(deckDataArr);
      setDecks(deckDataArr);
    }
    fetchDecks();
  }, []);

// console.log(decks[1].cards[1].name)
  
  return (
    <div className="setMainContainer">
      {decks && (
        <div className="decksMainContainer setsContainer">
          {decks.map((deck) => (
            <div className="card" key={deck._id}>
              <div className="card-content setText">
                <h2 style={{color: 'white', marginBottom: '1rem'}} className="title is-4 deckTitle">Name of Deck:{deck.title.toUpperCase()}</h2>
                <h2 style={{color: 'white'}}>Total Cards: {deck.totalCards}/60</h2> 
                {/* {
                deck.cards.length > 0 ? (deck.cards.map((card) => (
                  <div key={card._id}>{card.name}</div>
                ))) 
                :
                ''
                } */}
                <div className="content">
                  <Link
                    to={`/explorer/${deck._id}`}
                    state={{ user: user, deck: deck }}
                    className="button"
                  >
                    DETAILS
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
