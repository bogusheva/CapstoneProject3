import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../index.scss";

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
            {/* <Link to="/shop">Shop</Link> */}
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
            {/* <Link to="/blog">Blog</Link> */}
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
            {/* <Link to="/about">About</Link> */}
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
            {/* <Link to="/contact">Contact</Link> */}
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
