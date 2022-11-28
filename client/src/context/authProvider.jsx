import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userStorage, setUserStorage] = useState(null);

  useEffect(() => {
    const userLocalStorageJSON = window.localStorage.getItem("user");
    const user = JSON.parse(userLocalStorageJSON);
    setUserStorage(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserStorage(null);
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ userStorage, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
