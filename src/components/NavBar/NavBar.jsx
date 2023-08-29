import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="mainNav">
      <div className="mainNavContainer">
        <div className="left">
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="mainNavLinks">
        <div>
          <Link to="/explorer">Explorer</Link>
        </div>
        <div>
          <Link to="/dashboard">Sets</Link>
        </div>
        <div>
          {user && <Link to="/decks">My Decks</Link>}
        </div>
        <div>
          {user ? (
            <Link to="" onClick={handleLogOut}>
              Log Out
            </Link>
          ) : (
            <Link to="/login">Log In</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
