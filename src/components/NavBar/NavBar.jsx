import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/" >Home</Link>
      &nbsp;  &nbsp;
      <Link to="/dashboard">All Cards</Link>
      &nbsp;  &nbsp;
      {user && <Link to="/mydecks" >My Decks</Link>}
      &nbsp;  &nbsp;
      {user ? <span>Welcome, {user.name}</span> : null}
      &nbsp; &nbsp;
      {user ? <Link to="" onClick={handleLogOut}>Log Out</Link> : <Link to="/login">Log In</Link>}
    </nav>
  );
}
