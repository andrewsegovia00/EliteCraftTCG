import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/dashboard">All Cards</Link>
      &nbsp; | &nbsp;
      <Link to="/something">Pending</Link>
      &nbsp;&nbsp;
      {user ? <span>Welcome, {user.name}</span> : null}
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
