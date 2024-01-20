import { NavLink } from "react-router-dom";

import "./Header.css";

import Logo from "../../Assets/Logo";

function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <Logo></Logo>
      </div>
      <div className="links-group">
        <div className="link">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="link">
          <NavLink to="/popular">Popular</NavLink>
        </div>
        <div className="link">
          <NavLink to="/generate-show">Generate Show</NavLink>
        </div>
        <div className="link">
          <NavLink to="/similar-shows">Similar Shows</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
