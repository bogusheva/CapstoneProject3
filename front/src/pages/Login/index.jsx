import { useState, useEffect } from "react";

import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";

export default function Login() {
  const [selectedTab, setSelectedTab] = useState(2);
  const [localStorageData, setLocalStorageData] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setLocalStorageData(JSON.parse(savedData));
      setSelectedTab(1);
    }
  }, []);

  function toggleTab(index) {
    setSelectedTab(index);
  }

  return (
    <section className="login-section">
      <div className="login-container">
        <h1>
          <span className="icon-user"></span>
          Login / Register
        </h1>
        <p>
          Without log in / register you can't add products to cart or add to
          favorites
        </p>
        <div className="forms-section">
          <div className="tabs-row">
            <div
              className={selectedTab === 1 ? "button black" : "button"}
              onClick={() => toggleTab(1)}
            >
              Login
            </div>
            <div
              className={selectedTab === 2 ? "button black" : "button"}
              onClick={() => toggleTab(2)}
            >
              Register
            </div>
          </div>
          <div className="forms-row">
            {selectedTab === 1 ? (
              <LoginForm
                login={localStorageData ? localStorageData.login : ""}
                password={localStorageData ? localStorageData.password : ""}
              />
            ) : (
              <RegistrationForm />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
