import React, { useState } from 'react';
import "./DecksToAdd.css"

export default function DecksToAdd({ decks, onClose, onSubmit, deckId, setDeckId }) {
//   const [selectedDeckId, setSelectedDeckId] = useState('');

  const handleSelectChange = (event) => {
    setDeckId(event.target.value);
  };

  const handleSubmit = () => {
    console.log('left modal')
    onSubmit(deckId);
    onClose();
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
        <button onClick={handleSubmit}>Add</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

