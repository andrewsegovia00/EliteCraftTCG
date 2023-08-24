import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Dashboard from '../Dashboard/Dashboard';
import NavBar from '../../components/NavBar/NavBar';
import pokemon from 'pokemontcgsdk'; 
import './Home.css'

export default function Home() {
  const [user, setUser] = useState(getUser());
    // const [name, setName] = useState('');
    // const [user, setUser] = useState(null)
    return (
      <main className="App">
        { user ?
            <>
              <NavBar user={user} setUser={setUser} />
              <Routes>
                {/* Route components in here */}
                <Route path="/dashboard" element={<Dashboard />} />
                {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
              </Routes>
            </>
            :
            <AuthPage setUser={setUser} />
        }
        z
      </main>
    );
  }
//     function handleSubmit(evt) {
//       evt.preventDefault();
//       setUser(name);
//     }
  
//     function handleNameChange(evt) {
//       setName(evt.target.value);
//     }

//   return (
//     <>
//       <h1>Home Page</h1>
//       <div>{user}</div>
//       <form onSubmit={handleSubmit}>
//         <input name='name' value={name} onChange={handleNameChange} />
//         <button type='submit'></button>
//       </form>
//     </>
//   )
// }

