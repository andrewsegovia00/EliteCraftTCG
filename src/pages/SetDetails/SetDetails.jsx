// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAll as getAllSets } from '../../utilities/set';

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
            <Link to={`/sets/${set._id}`}>{set.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
