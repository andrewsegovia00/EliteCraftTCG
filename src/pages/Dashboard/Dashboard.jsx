import { useState } from 'react'
import './Dashboard.css'

export default function Home() {
    const [user, setUser] = useState(null)

    function handleSubmit(evt) {
        evt.preventDefault();
        const name = evt.target.value;
        setUser(name)
    }

  return (
    <>
      <h1>Dashboard Page</h1>
      <div>{user}</div>
      <form onSubmit={handleSubmit}>
        <input name='name' />
        <button type='submit'></button>
      </form>
    </>
  )
}

