import { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './DeckDetails.css';
import { useLocation } from 'react-router-dom';

export default function DeckDetails() {
    const location = useLocation();
    const { user, deck } = location.state || {};

    console.log(deck);
    console.log(user);

    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Link to='/decks'>
                <button style={{ marginTop: '2rem', marginLeft: 'auto' }}>
                    Go Back
                </button>
            </Link>
        </div>
        <div>
            <h1>{user.name.toUpperCase()}'s {deck.title.toUpperCase()} Deck</h1>
            <div>Owner: {user.name}</div> 
            <div>Name of Deck: {deck.title}</div> 
            <div>Total Cards: {deck.totalCards}/60</div> 
        </div>
        </>
    );
}

