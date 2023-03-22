import React from "react";

const AuthContext = React.createContext({
  isLogged: false,
  setIsLogged: () => {},
});

export default AuthContext;
