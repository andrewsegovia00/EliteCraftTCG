import React, { useState, useEffect } from 'react';
import pokemon from 'pokemontcgsdk'
import axios from 'axios';
import './Dashboard.css'

pokemon.configure({apiKey: import.meta.env.POKE_APIKEY})

export default function Dashboard() {
  const [number, setNumber] = useState('');
  const [card, setCard] = useState(null)
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {

    pokemon.card.find(`base1-${card}`)
    .then(card => {
        console.log(card.name)
        setCardDetails(card.data);
    })
}, [card]);

    // const fetchCardDetails = async () => {
    //   try {
    //     const response = await axios.get(`https://api.pokemontcg.io/v2/cards/${card}`);
    //     setCardDetails(response.data);
    //   } catch (error) {
    //     console.error('Error fetching card details:', error);
    //   }
    // };

    // fetchCardDetails();
//   }, [card]);
  
    function handleSubmit(evt) {
      evt.preventDefault();
      setCard(card);
    }
  
    function handleNumberChange(evt) {
      setNumber(evt.target.value);
    }

  return (
    <>
        <div>
            {cardDetails ? (
                <>
                    <h2>Card Details</h2>
                    <div>
                        <p>Name: {cardDetails.name}</p>
                        <p>Set: {cardDetails.set.name}</p>
                        <img src={cardDetails.images.small} />
                    </div>
                </>
            ) : (
                <p>Loading card details...</p>
            )}
        </div>
        <form onSubmit={handleSubmit}>
            <input name='number' value={number} onChange={handleNumberChange} />
            <button type='submit'></button>
        </form>
    </>
  );
}

