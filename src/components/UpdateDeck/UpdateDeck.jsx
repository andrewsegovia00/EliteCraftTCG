import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOneDeckByUserId, updateDeck } from '../../utilities/decks';


export default function UpdateDeck({user}) {
  const navigate = useNavigate();
  const { deckId } = useParams();
  const [title, setTitle] = useState('');
//   const [deckId, setDeckId] = useState('');

  useEffect(() => {
    async function fetchDeck() {
      try {
        const deckData = await getOneDeckByUserId(user._id, deckId);
        setTitle(deckData.title);
        // setTitle(deckData.title);
        console.log('heres the first round')
      } catch (err) {
        console.error(err);
      }
    }
    fetchDeck();
  }, [deckId]);

  const handleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const updatedDeckData = await updateDeck(deckId, title );
      console.log(updatedDeckData);
      navigate('/decks');
    } catch (err) {
      console.error(err);
    }
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
