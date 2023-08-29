import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ExplorerDeckDetails.css';
import { useLocation } from 'react-router-dom';

export default function DeckDetails() {
    const location = useLocation();
    const { state } = location;
    console.log(state)
    console.log(`we're here`)
    let { deck } = state || {};


    return (
        <>
        <div className='ExpDetMainCont'>
            {/* <div className='leftExp'>
                    <Link to='/explorer'>
                        <button style={{ marginTop: '0rem', marginLeft: 'auto' }}>
                            Go Back
                        </button>
                    </Link>
            <h1>{deck.userId.name.toUpperCase()}'s {deck.title.toUpperCase()} Deck</h1>
            </div> */}
            <div className='headerExp'>
                <Link to='/explorer'>
                <button style={{fontSize: '2rem', borderRadius: '100%', padding: '.5rem 1rem .5rem 1rem'}}>
                    {/* Go Back
                     */}
                     ←
                </button>
                </Link>
                <h1>{deck.userId.name.toUpperCase()}'s {deck.title.toUpperCase()} Deck</h1>
            </div>
            <div>
                <div className='rightExp'>
                    <div>Owner: {deck.userId.name}</div> 
                    <div>Name of Deck: {deck.title}</div> 
                    <div>Total Cards: {deck.totalCards}/60</div> 
                </div>
            </div>
        </div>
        <div className="container">
            <div className="gallery columns is-mobile" >
            {deck && deck.cards.length > 0 ? (
            deck.cards.map((card) => (
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
            ))
            ) : (
            <p>No cards added yet</p>
            )}

            </div>
        </div>
        
        </>
    );
}


