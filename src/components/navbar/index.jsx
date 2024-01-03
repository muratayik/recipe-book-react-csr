import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import * as AuthSelectors from "../../store/auth/auth.selectors";

import UserInfo from "./user-info";

const Navbar = () => {
  const isLoggedIn = useSelector(AuthSelectors.selectAuthIsLoggedIn);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/category">
          Recipe Book
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/category">
                Categories
              </Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/favorite">
                  Favorites
                </Link>
              </li>
            )}
          </ul>
          <UserInfo isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
