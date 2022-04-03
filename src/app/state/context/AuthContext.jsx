import { createContext, useContext } from "react";

const authContext = createContext();

//* Hook to use Auth Context
const useAuthContext = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There's not Auth Provider");
  return context;
};

//* Auth provider component
const AuthProvider = ({ children }) => {
  const user = {
    isAuth: true,
    email: "jrrv99@gmail.com",
  };

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
};

export { AuthProvider as default, authContext, useAuthContext };
