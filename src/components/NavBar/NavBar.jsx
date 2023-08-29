import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'
import logo from '../../assets/pichuLogo.png'
import { useNavigate } from 'react-router-dom';

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate()
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    navigate('/')
  }

  return (
  <nav className="mainNav">
    <div className="mainNavContainer">
      <div className="left">
      <Link to="/" className="whiteLink">
        <img src={logo} className="homeimg logo" />
        tcg elite crafting
        </Link>
      </div>
    </div>
    <div className="mainNavLinks">
      <div>
        <Link to="/explorer" className="whiteLink">explorer</Link>
      </div>
      <div>
        <Link to="/dashboard" className="whiteLink">sets</Link>
      </div>
      <div>
        {user ? <Link to="/decks" className="whiteLink">my decks</Link> : ''}
      </div>
      <div>
        {user ? (
          <Link to="" onClick={handleLogOut} className="whiteLink">
            log out
          </Link>
        ) : (
          <Link to="/login" className="whiteLink">log in</Link>
        )}
      </div>
    </div>
  </nav>
  );
}
