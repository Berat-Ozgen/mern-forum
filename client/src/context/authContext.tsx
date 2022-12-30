import { createContext, useEffect, useState } from "react";

const AuthContext = createContext<any>({});

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(() => {
    const userData = localStorage.getItem("users");
    return userData ? JSON.parse(userData) : false;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user));
  }, [user]);

  const values = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
