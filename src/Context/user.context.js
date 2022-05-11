import { createContext, useState } from "react";

export const UserContext = createContext({
  passwordShown: false,
  setPasswordShown: () => false
});

export const UserProvider = ({ children }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const value = {
    passwordShown,
    setPasswordShown
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}