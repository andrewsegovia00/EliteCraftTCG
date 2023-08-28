import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate} from 'react-router-dom';
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
        <h1 className="is-size-4">{data.set.name}</h1>
      <div className="mb-4">
        <img className='logoSet' src={`${data.set.imageUrl}`} />
      </div>
      <div className="gallery columns is-mobile">
        {data.cards.map((card) => (
          <div
            className="column is-half-mobile is-one-third-tablet is-one-fifth-desktop"
            key={card._id}
          >
            <Link to={`/cardview/${card._id}`} state={{ card: card, set: data.set}}>
              <img
                className="card-image hvr-grow"
                src={card.imageUrl}
                alt={card.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

