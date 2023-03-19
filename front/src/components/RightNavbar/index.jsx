import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RightNavbar() {
  const [localStorageData, setLocalStorageData] = useState({});
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setLocalStorageData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="right-navbar">
      {localStorageData.login && (
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
      <Link to={"./login"}>
        <span className="icon-user">
          <span className="not-mobile-view">Login</span>
        </span>
      </Link>
    </div>
  );
}
