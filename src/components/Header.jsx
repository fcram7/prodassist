import { Link } from "react-router-dom";

const Header = () => {
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
              <Link to="login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
   );
}
 
export default Header;