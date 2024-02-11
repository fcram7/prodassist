import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const Header = ({ homeText, loginText }) => {
  return ( 
    <header>
      <nav className="navbar container flex">
        <h1 className="header-logo">Prodassist</h1>
        <div className="header-menu">
          <ul className="menu-list flex">
            <li>
              <Link to="/">{homeText}</Link>
            </li>
            <li>
              <Link to="/login">{loginText}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
   );
}

Header.propTypes = {
  homeText: PropTypes.string,
  loginText: PropTypes.string,
}
 
export default Header;