import { useContext } from "react";
import { createContext } from "react";

export const AppContext = createContext();
const initialState = {
  name: "John",
};

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

// export  {AppContext, AppProvider}
