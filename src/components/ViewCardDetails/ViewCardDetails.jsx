import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { getAllCardsBySetId } from '../../utilities/cards';
import './ViewCardDetails.css'

export default function ViewCardDetails() {
const location = useLocation();
const { card } = location.state;

  return (
    <div className="container">
          <div
            className="column is-half-mobile is-one-third-tablet is-one-fifth-desktop"
            key={card._id}
          >
              <img
                className="card-image hvr-grow"
                src={card.imageUrl}
                alt={card.name}
              />
          </div>
          {/* <Link to='/dashboard'> */}
                <button style={{ marginTop: '2rem', marginLeft: 'auto' }}>
                    Add to Deck
                </button>
            {/* </Link> */}
    </div>
  );
}

