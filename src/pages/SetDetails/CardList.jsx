import React, { useState, useEffect } from 'react';
import { getAll as getAllCardsBySetId } from '../../utilities/card';

export default function CardList({ set }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const cardsData = await getAllCardsBySetId(set.set_id);
      setCards(cardsData);
    }
    fetchCards();
  }, [set]);

  return (
    <div>
      <h3>Cards in this Set:</h3>
      <ul>
        {cards.map((card) => (
          <div key={card._id}>
            <h1>{card.name}</h1>
            <img src={`${card.imageUrl}`} />
            <p>{card.number}</p>
            <p>{card.set}</p>
            <p>{card.typeImg}</p>
            <ul>standard: {card.legality.standard}</ul>
            <ul>expanded {card.legality.expanded}</ul>
            <ul>unlimited {card.legality.unlimited}</ul>
          </div>
        ))}
      </ul>
    </div>
  );
}

// export default CardList;
