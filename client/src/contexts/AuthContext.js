import { createContext, useState } from "react";

// initial state
const initialState = {
  user: {},
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [config, setConfig] = useState(initialState);

  const login = (user) => {
    setConfig({
      ...config,
      isLoggedIn: true,
      user: {
        id: user._id,
        email: user.email,
        passwprd: user.password,
      },
    });
  };

  const logout = () => {
    setConfig({
      ...config,
      isLoggedIn: false,
      user: {},
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...config,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
