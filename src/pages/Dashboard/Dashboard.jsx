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
      <h1>Booster Sets</h1>
      <div className="setContainer">
        {sets.map((set) => (
          <div className="card" key={set._id}>
            <Link to={`/cardlist/${set._id}`}>
              <div className="card-image setLogo">
                <img src={`${set.imageUrl}`} alt={set.name} />
              </div>
              <div className="card-content setText">
                <div className="content">
                  <ul >
                    <li className='blocking'>
                      <div className='header'>Standard</div>
                      <div className='legal'>Legal</div>
                    </li>
                    <li className='blocking'>
                    <div className='header'>Legal</div>
                    <div className='legal'>Legal</div>
                    </li>
                    <li className='blocking'>
                    <div className='header'>Legal</div>
                    <div className='legal'> Legal</div>
                    </li>
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