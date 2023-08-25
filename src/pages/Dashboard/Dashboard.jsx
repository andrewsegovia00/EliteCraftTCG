import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAll as getAllSets } from '../../utilities/sets';
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
  return (
    <div>
      <h2>Booster Sets</h2>
      <ul>
        {sets.map((set) => (
          <div key={set._id}>
            <Link to={`/sets/${set._id}`}>
            <h1>{set.name}</h1>
              <img src={`${set.imageUrl}`} />
              {/* <ul> */}
                <ul>standard: {set.legality.standard}</ul>
                <ul>expanded {set.legality.expanded}</ul>
                <ul>unlimited {set.legality.unlimited}</ul>
              {/* </ul> */}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}