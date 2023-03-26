import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import AuthContext from "./context/AuthContext";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      <div className="body-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}
