import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createDeck } from '../../utilities/decks';

export default function NewDeck() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  const handleChange = (evt) => {
    setTitle(evt.target.value);
    console.log(title);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const deckData = await createDeck({title});
      console.log(deckData);
    } catch (err) {
        console.error(err);
    }
    navigate('/decks');
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
