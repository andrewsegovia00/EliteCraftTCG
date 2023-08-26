import { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { getAllDecksByUserId as getAllDecks, deleteDeck} from '../../utilities/decks';

import './DeckBoard.css';

export default function Dashboard({user}) {
    const navigate = useNavigate();
    const [decks, setDecks] = useState([]);

    useEffect(() => {
    async function fetchDecks() {
        const deckData = await getAllDecks(user._id);
        console.log(deckData)
        setDecks(deckData);
      }
      fetchDecks();
    }, []);

    const handleDelete = async (deckId) => {
        try {
            await deleteDeck({deckId});
        } catch (err) {
            console.error(err);
        }
        navigate('/decks');
        setDecks(prevDecks => prevDecks.filter(deck => deck._id !== deckId));
      };
      

    return (
        <div>
            <div className="right">
            <Link to={`/decks/create`}>
              <button>Create A New Deck</button>
            </Link>
            </div>
            {decks && (
            <div className='decksMainContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {decks.map((deck) => (
            <div className='decksContainer' key={deck._id} style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <div className='deckTitle'>
                    {deck.title}
                    <button onClick={() => handleDelete(deck._id)}>DELETE</button>
                    <Link to='/decks/detail'>
                        <button>SEE DETAILS</button>
                    </Link>
                </div>
            </div>
            ))}
            </div>
            )}
        </div>
    );
}