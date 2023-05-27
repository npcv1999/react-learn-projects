import { auth } from "@firebaseConfig";
import { User, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect } from "react";

type AuthContextType = {
  user: User | null;
};

const AuthContext = createContext({} as AuthContextType);

function AuthProvider(props: React.PropsWithChildren<{}>) {
  const [user, setUser] = React.useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const value = { user };

  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
