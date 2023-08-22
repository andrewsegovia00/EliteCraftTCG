import { useState, useEffect } from 'react';
import pokemon from 'pokemontcgsdk'
import './Dashboard.css'

pokemon.configure({apiKey: import.meta.env.POKE_APIKEY})

export default function Dashboard() {
  const [number, setNumber] = useState('');
  const [card, setCard] = useState(4)
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    pokemon.card.find(`base1-${card}`)
    .then(card => {
        console.log(card.name)
        setCardDetails(card);
    })
    }, [card]);
  
    function handleSubmit(evt) {
      evt.preventDefault();
      setCard(number);
    }
  
    function handleNumberChange(evt) {
      setNumber(evt.target.value);
    }

  return (
    <>
        <br />
        <form onSubmit={handleSubmit}>
            <input name='number' value={number} onChange={handleNumberChange} />
            <button type='submit'>Search For Card</button>
        </form>
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
    </>
  );
}

