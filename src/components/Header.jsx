const Header = () => {
  return ( 
    <header>
      <nav className="navbar container flex">
        <h1 className="header-logo">Prodassist</h1>
        <div className="header-menu">
          <ul className="menu-list flex">
            <li>
              Home
            </li>
            <li>
              Login
            </li>
          </ul>
        </div>
      </nav>
    </header>
   );
}
 
export default Header;