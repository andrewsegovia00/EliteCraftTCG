import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAll as getAllSets } from '../../utilities/sets';
import './Dashboard.css';

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
    <div className="setMainContainer">
      <h2>Booster Sets</h2>
      <div className="setContainer">
        {sets.map((set) => (
          <div className="card" key={set._id}>
            <Link to={`/cardlist/${set._id}`}>
              <div className="card-image setLogo">
                <img src={`${set.imageUrl}`} alt={set.name} />
              </div>
              <div className="card-content setText">
                <p className="title is-4">{set.name}</p>
                <p className="subtitle is-6">Released {set.releaseDate}</p>
                <div className="content">
                  <ul>
                    <li>Standard Legal</li>
                    <li>Expanded Legal</li>
                    <li>Unlimited Legal</li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}