import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-title">WHAT TO WATCH?</div>
      <div className="links-group">
        <div className="link">
          <NavLink to="/">Generate Episode</NavLink>
        </div>
        <div className="link">
          <NavLink to="/generate-show">Generate Show</NavLink>
        </div>
        <div className="link">
          <NavLink to="/popular-shows">Popular Shows</NavLink>
        </div>
        <div className="link">
          <NavLink to="/similar-shows">Similar Shows</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
