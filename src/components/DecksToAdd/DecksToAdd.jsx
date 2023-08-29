import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./DecksToAdd.css"

export default function DecksToAdd({ decks, onClose, onSubmit, deckId, setDeckId }) {
    const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setDeckId(event.target.value);
  };

  const handleSubmit = () => {
    console.log('left modal')
    onSubmit(deckId);
    onClose();
    navigate('/decks')
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select a Deck</h2>
        <select value={deckId} onChange={handleSelectChange}>
          <option value="">Select a deck</option>
          {decks.map((deck) => (
            <option key={deck._id} value={deck._id}>
              {deck.title}
            </option>
          ))}
        </select>
        <div className='modBtnCont'>
          <button onClick={handleSubmit} className='modBt'>Add</button>
          <button onClick={onClose} className='modBt'>Cancel</button>
        </div>
      </div>
    </div>
  );
}

