import { createContext, useState, useEffect } from "react";

import { 
  authStateChangedListener, 
  createUserDocumentFromAuth
} from '../Utilities/firebase';

export const UserContext = createContext({
  passwordShown: false,
  setPasswordShown: () => false,
  currentUser: null,
  setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const value = {
    passwordShown,
    setPasswordShown,
    currentUser,
    setCurrentUser
  };

  useEffect(() => {
    const unsubscribe = authStateChangedListener((user)=> {
      if (user) { 
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}