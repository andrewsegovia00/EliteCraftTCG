import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DeckBoard.css';

export default function Dashboard() {
    const [decks, setDecks] = useState([]);
    useEffect(() => {
      async function fetchDecks() {
        const deckData = await getAllDeck(user.id);
        console.log(deckData)
        setDecks(deckData);
      }
      fetchDecks();
    }, []);
  return (
    <div>
    <div className="right">
        <Link to={`/mydecks/${set._id}`}>
        <button>Create A New Deck</button>
        </Link>
    </div>
    { decks &&
        <div>
            <div>

            </div>
        </div>
    }
    </div>
  );
}