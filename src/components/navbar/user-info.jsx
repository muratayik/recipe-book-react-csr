import { Link } from "react-router-dom";

const UserInfo = ({ isLoggedIn }) => (
  <ul className="navbar-nav">
    {isLoggedIn ? (
      <>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/logout">
            Logout
          </Link>
        </li>
      </>
    ) : (
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/login">
          Login
        </Link>
      </li>
    )}
  </ul>
);

export default UserInfo;
