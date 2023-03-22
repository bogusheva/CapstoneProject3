import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function RightNavbar() {
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setIsLogged(false);
    navigate("/");
  }

  return (
    <div className="right-navbar">
      {isLogged && (
        <>
          <Link to={"./favorites"}>
            <span className="icon-heart">
              <span className="not-mobile-view">Favorites</span>
            </span>
          </Link>
          <Link to={"./cart"}>
            <span className="icon-cart">
              <span className="not-mobile-view">Cart</span>
            </span>
          </Link>
        </>
      )}
      {isLogged ? (
        <span className="icon-user" onClick={logout}>
          <span className="not-mobile-view">Log Out</span>
        </span>
      ) : (
        <Link to={"./login"}>
          <span className="icon-user">
            <span className="not-mobile-view">Log in</span>
          </span>
        </Link>
      )}
    </div>
  );
}
