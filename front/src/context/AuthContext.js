import { createContext } from "react";

const AuthContext = createContext({
  isLogged: false,
  setIsLogged: () => {},
});

export default AuthContext;
