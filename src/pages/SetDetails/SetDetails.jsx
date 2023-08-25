import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getById as getSetById } from '../utilities/set'; // Import the utility function

function SetDetails() {
  const { setId } = useParams();
  const [set, setSet] = useState(null);

  useEffect(() => {
    async function fetchSet() {
      const setData = await getSetById(setId);
      setSet(setData);
    }
    fetchSet();
  }, [setId]);

  if (!set) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Set Details</h2>
      <p>Name: {set.name}</p>
      {/* Display other set details */}
    </div>
  );
}

export default SetDetails;
