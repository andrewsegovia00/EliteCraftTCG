import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAll as getAllSets } from '../../utilities/set';
// import pokemon from 'pokemontcgsdk'
import './Dashboard.css';
// pokemon.configure({apiKey: import.meta.env.POKE_APIKEY});

export default function Dashboard() {
  const [sets, setSets] = useState([]);
  useEffect(() => {
    async function fetchSets() {
      const setsData = await getAllSets();
      console.log(setsData)
      setSets(setsData);
    }
    fetchSets();
  }, []);
  console.log(`Here is the updated sets ` + sets)
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