import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

import Logo from "../../Assets/Logo";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [navbarOpen, setNavBarOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-logo" onClick={()=> navigate("/")}>
          <span>
            <Logo />
          </span>
        </div>

        <div className="nav-links-group">
          <div className="nav-link">
            <NavLink to="/">HOME</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/popular">POPULAR</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/generate-show">GENERATE SHOW</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/similar-shows">SIMILAR SHOWS</NavLink>
          </div>
        </div>

        <div className="nav-menu">
          <button
            className="menu-button"
            onClick={(event) => {
              setNavBarOpen(!navbarOpen);
              setAnchorEl(event.currentTarget);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.5"
                y1="1.5"
                x2="38.5"
                y2="1.5"
                stroke="#8E6EB5"
                stroke-width="3"
                stroke-linecap="round"
              />
              <line
                x1="1.5"
                y1="21.5"
                x2="38.5"
                y2="21.5"
                stroke="#8E6EB5"
                stroke-width="3"
                stroke-linecap="round"
              />
              <line
                x1="1.5"
                y1="11.5"
                x2="38.5"
                y2="11.5"
                stroke="#8E6EB5"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      <Menu
        open={navbarOpen}
        className="nav-menu-links"
        anchorEl={anchorEl}
        onClose={() => {
          setNavBarOpen(!navbarOpen);
          setAnchorEl(null);
        }}
      >
        <MenuItem className="nav-link">
          <NavLink to="/">HOME</NavLink>
        </MenuItem>
        <MenuItem className="nav-link">
          <NavLink to="/popular">POPULAR</NavLink>
        </MenuItem>
        <MenuItem className="nav-link">
          <NavLink to="/generate-show">GENERATE SHOW</NavLink>
        </MenuItem>
        <MenuItem className="nav-link">
          <NavLink to="/similar-shows">SIMILAR SHOWS</NavLink>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Header;
