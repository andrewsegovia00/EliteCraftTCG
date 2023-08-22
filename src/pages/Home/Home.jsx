import { useState } from 'react'
import './Home.css'

export default function Home() {
    const [name, setName] = useState('');
    const [user, setUser] = useState(null)
  
    function handleSubmit(evt) {
      evt.preventDefault();
      setUser(name);
    }
  
    function handleNameChange(evt) {
      setName(evt.target.value);
    }

    

  return (
    <>
      <h1>Home Page</h1>
      <div>{user}</div>
      <form onSubmit={handleSubmit}>
        <input name='name' value={name} onChange={handleNameChange} />
        <button type='submit'></button>
      </form>
    </>
  )
}

