import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeftNavbar() {
  const [isClicked, setIsClicked] = useState(false);
  function toggleBurgerMenu() {
    setIsClicked((prevState) => !prevState);
  }
  return (
    <div className="nav-holder">
      <nav className={`nav ${isClicked}`}>
        <div className="burger-holder">
          <button className="burger-btn" onClick={toggleBurgerMenu}>
            <span></span>
          </button>
        </div>
        <ul className="left-navbar">
          <li>
            <NavLink
              to={"/shop"}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blog"}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
