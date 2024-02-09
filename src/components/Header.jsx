import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const Header = ({ onLogout, loginText, logoutText }) => {
  return ( 
    <header>
      <nav className="navbar container flex">
        <h1 className="header-logo">Prodassist</h1>
        <div className="header-menu">
          <ul className="menu-list flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">{loginText}</Link>
            </li>
            <li>
              <Link onClick={onLogout}>{logoutText}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
   );
}

Header.propTypes = {
  loginText: PropTypes.string,
  logoutText: PropTypes.string,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
}
 
export default Header;