import { useState, useEffect } from 'react';
import pokemon from 'pokemontcgsdk'
import './Dashboard.css'

pokemon.configure({apiKey: import.meta.env.POKE_APIKEY})

export default function Dashboard() {
  const [number, setNumber] = useState('');
  const [card, setCard] = useState(228)
  const [cardDetails, setCardDetails] = useState(null);

  (async function reload() {const cardsData = await pokemon.card.all({ set: 'sv1' }); console.log(cardsData)}())

  useEffect(() => {
    // pokemon.card.find(`sm12-${card}`)
    // pokemon.set.all({ q: 'series:sv1' })
    // .then(card => {
    //     console.log(card)
    //     setCardDetails(card);
    // })
    // }, [card]);

    //Query to seed all of the sets with
    //id
    //name
    //total
    //etc
    // pokemon.set.all({ q: 'series:base' })
    // .then((cards) => {
    //     console.log(cards) // "Base"
    // })
    // }, [card]);

    pokemon.card.all({ q: 'set.id:sm1' })
    .then(result => {
        console.log(result.data) // "Venusaur"
    })
    }, [card]);

    // pokemon.set.where({ q: 'name:Blastoise' })
    // .then(result => {
    //   // result.forEach(booster => {
    //     console.log(result);
    //     //Add to the card database and to the set database
    //   });
    // });  
    // }, [card]);
  
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
      {cardDetails.map(card => (
        <div key={card.id}>
          <p>Name: {card.name}</p>
          <p>Set: {card.set.name}</p>
          <img src={card.images.small} alt={`Card ${card.name}`} />
          {/* <img src={card.set.images.logo} alt={`Logo of ${card.set.name}`} />
          <img src={card.set.images.symbol} alt={`Symbol of ${card.set.name}`} /> */}
        </div>
      ))}
    </>
  ) : (
    <p>Loading card details...</p>
  )}
</div>

    </>
  );
}

