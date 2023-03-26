import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";

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
          <NavLink to={"./favorites"}>
            <span className="icon-heart">
              <span className="not-mobile-view">Favorites</span>
            </span>
          </NavLink>
          <NavLink to={"./cart"}>
            <span className="icon-cart">
              <span className="not-mobile-view">Cart</span>
            </span>
          </NavLink>
        </>
      )}
      {isLogged ? (
        <span className="icon-exit" onClick={logout}>
          <span className="not-mobile-view">Log Out</span>
        </span>
      ) : (
        <NavLink to={"./login"}>
          <span className="icon-enter">
            <span className="not-mobile-view">Log in</span>
          </span>
        </NavLink>
      )}
    </div>
  );
}
