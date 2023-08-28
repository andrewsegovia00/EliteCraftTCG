import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllDecksByUserId as getAllDecks, deleteDeck } from '../../utilities/decks';

import './DeckBoard.css';

export default function Dashboard({ user }) {
  const navigate = useNavigate();
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function fetchDecks() {
      const deckData = await getAllDecks(user._id);
      console.log(deckData);
      setDecks(deckData);
    }
    fetchDecks();
  }, []);

  const handleDelete = async (deckId) => {
    try {
      await deleteDeck({ deckId });
    } catch (err) {
      console.error(err);
    }
    navigate('/decks');
    setDecks((prevDecks) => prevDecks.filter((deck) => deck._id !== deckId));
  };

  return (
    <div className="setMainContainer">
      <div className="right">
        <Link to={`/decks/create`}>
          <button style={{marginBottom: '2rem'}}>Create A New Deck</button>
        </Link>
      </div>
      {decks && (
        <div className="decksMainContainer setsContainer">
          {decks.map((deck) => (
            <div className="card" key={deck._id}>
              <div className="card-content setText">
                <h2 style={{color: 'white', marginBottom: '1rem'}} className="title is-4 deckTitle">Name of Deck:{deck.title.toUpperCase()}</h2>
                <h2 style={{color: 'white'}}>Total Cards: {deck.totalCards}/60</h2> 
                <div className="content">
                  <Link
                    to={`/decks/detail/${deck._id}`}
                    state={{ user: user, deck: deck }}
                    className="button"
                  >
                    DETAILS
                  </Link>
                  <Link
                    to={`/decks/update/${deck._id}`}
                    state={{ user: user, deck: deck }}
                    className="button"
                  >
                    UPDATE
                  </Link>
                  <button className="button" onClick={() => handleDelete(deck._id)}>
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
