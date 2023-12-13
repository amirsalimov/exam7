import { useContext } from "react";
import { createContext } from "react";


const AppContext = createContext();


const AppProvider = ({children}) =>{
    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}