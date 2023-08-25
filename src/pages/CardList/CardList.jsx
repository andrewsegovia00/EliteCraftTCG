import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllCardsBySetId } from '../../utilities/cards';
import './CardList.css'

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
    <div className="container">
      <div className="mb-4">
        <strong className="is-size-4">{data.set.name}</strong>
        <small>({data.set.setCode})</small>
      </div>
      <div className="gallery columns is-mobile">
        {data.cards.map((card) => (
          <div
            className="column is-half-mobile is-one-third-tablet is-one-fifth-desktop"
            key={card._id}
          >
            <a href={`/card/${card.slug}/${card.setCode}-${card.number}`}>
              <img
                className="card-image hvr-grow"
                src={card.imageUrl}
                alt={card.name}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
