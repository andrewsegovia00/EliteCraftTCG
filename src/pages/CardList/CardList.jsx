import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllCardsBySetId } from '../../utilities/cards';

export default function CardList() {
  const { setId } = useParams(); 
  const [data, setData] = useState({ set: {}, cards: [] });

  useEffect(() => {
    async function fetchCardsBySetId() {
      const cardsData = await getAllCardsBySetId(setId);
      console.log(cardsData)
      setData(cardsData);
    }
    fetchCardsBySetId();
  }, [setId]);

  return (
    <div>
      <h1>{data.set.name}</h1>
      <img src={`${data.set.imageUrl}`} />
      <h3>Cards in this Set:</h3>
      <ul>
        {data.cards.map((card) => (
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
