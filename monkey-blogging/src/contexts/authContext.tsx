import React, { createContext, useContext } from "react";

const AuthContext = createContext({});

function AuthProvider(props: React.PropsWithChildren<{}>) {
  return <AuthContext.Provider value={{}} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
