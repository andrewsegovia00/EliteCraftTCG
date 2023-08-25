import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAll as getAllSets } from '../../utilities/set';
// import pokemon from 'pokemontcgsdk'
import './Dashboard.css';
// pokemon.configure({apiKey: import.meta.env.POKE_APIKEY});

function Dashboard() {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    async function fetchSets() {
      const setsData = await getAllSets();
      setSets(setsData);
    }
    fetchSets();
  }, []);

  return (
    <div>
      <h2>Booster Sets</h2>
      <ul>
        {sets.map((set) => (
          <li key={set._id}>
            <Link to={`/sets/${set._id}`}>
              <img src={`${set.imageUrl}`} />
              <p>{set.name}</p>
              <ul>
                <li>standard: {set.legality.standard}</li>
                <li>expanded {set.legality.expanded}</li>
                <li>unlimited {set.legality.unlimited}</li>
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;



// export default function Dashboard() {
//   const [number, setNumber] = useState('');
//   const [card, setCard] = useState(228)
//   const [cardDetails, setCardDetails] = useState(null);

//   useEffect(() => {

//     pokemon.set.all({ q: 'series:Sword' })
//     .then((cards) => {
//         console.log(cards)
//     })
//     }, [card]);

//     function handleSubmit(evt) {
//       evt.preventDefault();
//       setCard(number);
//     }
  
//     function handleNumberChange(evt) {
//       setNumber(evt.target.value);
//     }

//   return (
//     <>
//         <br />
//         <form onSubmit={handleSubmit}>
//             <input name='number' value={number} onChange={handleNumberChange} />
//             <button type='submit'>Search For Card</button>
//         </form>
//         <div>
//   {cardDetails ? (
//     <>
//       <h2>Card Details</h2>
//       {cardDetails.map(card => (
//         <div key={card.id}>
//           <p>Name: {card.name}</p>
//           <p>Set: {card.set.name}</p>
//           <img src={card.images.small} alt={`Card ${card.name}`} />
//           {/* <img src={card.set.images.logo} alt={`Logo of ${card.set.name}`} />
//           <img src={card.set.images.symbol} alt={`Symbol of ${card.set.name}`} /> */}
//         </div>
//       ))}
//     </>
//   ) : (
//     <p>Loading card details...</p>
//   )}
// </div>

//     </>
//   );
// }

