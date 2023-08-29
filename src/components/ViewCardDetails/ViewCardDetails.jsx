import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import DecksToAdd from '../DecksToAdd/DecksToAdd';
import { addCardToDeck, getAllDecksByUserId as getAllUserDecks } from '../../utilities/decks';
import './ViewCardDetails.css'

export default function ViewCardDetails({user}) {
const [isAddingToDeck, setIsAddingToDeck] = useState(false);
const [showModal, setShowModal] = useState(false);
const [deckId, setDeckId] = useState('');
const [decks, setDecks] = useState([]);

const location = useLocation();
const navigate = useNavigate();

const { card, set } = location.state;

useEffect(() => {
    async function fetchDecks() {
      const deckData = await getAllUserDecks(user._id);
      console.log(deckData);
      setDecks(deckData);
    }
    fetchDecks();
}, []);

const handleAddToDeck = async () => {
    try {
        console.log('just left the cardDetails page')
      await addCardToDeck(deckId, card._id);
        navigate('/decks')
    } catch (error) {
        console.error('Error adding to deck:', error);
    }
    navigate('/decks')
  };

  const openModal = () => {
    setIsAddingToDeck(true);
    setShowModal(true);
  };

  const closeModal = () => {
    setIsAddingToDeck(false);
    setShowModal(false);
  };

  return (
    <div className="container" style={{ alignItems: 'normal'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between'  }}>
            <Link to={`/cardlist/${set._id}`}>
                <button style={{ marginTop: '2rem', marginLeft: 'auto' }}>
                    Go Back
                </button>
            </Link>
            <form style={{display:'flex'}} onSubmit={handleAddToDeck}>
            </form>
        </div>
          <div 
            className="column is-half-mobile is-one-third-tablet is-one-fifth-desktop"
            style={{ padding: '0px', marginTop: '.8rem'}}
            key={card._id}
          >
              <img
                className="card-image hvr-grow"
                src={card.imageUrl}
                alt={card.name}
              />
          </div>
          <button type="submit" disabled={isAddingToDeck} onClick={openModal}>
            {isAddingToDeck ? 'Adding...' : 'Add to Deck'}
            </button>
            {showModal && (
                <DecksToAdd
                decks={decks}
                onClose={closeModal}
                onSubmit={handleAddToDeck}
                deckId={deckId}
                setDeckId={setDeckId}
                />
                )}
    </div>
    
  );
}

