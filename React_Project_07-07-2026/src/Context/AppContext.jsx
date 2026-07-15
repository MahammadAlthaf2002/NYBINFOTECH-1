import { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [theme, setTheme] = useState("Light");
  const [user, setUser] = useState("Guest");

  const changeTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  const login = () => {
    setUser("Althaf");
  };

  const logout = () => {
    setUser("Guest");
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        user,
        changeTheme,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;