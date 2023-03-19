import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Favorites from "../Favorites";
import Basket from "../Basket";

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
          <Favorites />
          <Basket />
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
