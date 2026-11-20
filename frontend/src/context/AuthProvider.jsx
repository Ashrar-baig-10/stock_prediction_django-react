import { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [isLoggedin, setIsLoggedin] = useState(
    !!localStorage.getItem("accessToken"),
  );

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedin, setIsLoggedin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
