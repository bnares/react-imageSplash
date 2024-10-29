import { createContext, ReactNode, useState, useContext } from "react";
import React from "react";

interface UserContexttype {
    isDarkTheme:boolean,
    toggleDarkTheme:()=>void,
    searchValue:string,
    setSearchValue:(value:string)=>void,
}

const UserCOntextDefaultValues : UserContexttype = {
    isDarkTheme:false,
    toggleDarkTheme:()=>{},
    searchValue:"",
    setSearchValue:(value:string)=>{}
}

// Typ dla komponentu UserProvider (dostawcy kontekstu)
interface UserProviderProps {
    children: ReactNode // Oczekuje dzieci, które będą wewnątrz providera
}

// Tworzenie kontekstu
export const UserContext = createContext<UserContexttype>(UserCOntextDefaultValues);

export const UserProvider = ({children}: UserProviderProps)=>{
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("cat");
    
    const toggleDarkTheme = ()=>{
        const newValue = !isDarkTheme;
        setIsDarkTheme(newValue);
        const body = document.querySelector("body") as HTMLBodyElement;
        body.classList.toggle("dark-theme", newValue);
        console.log(body);
    }
    
    return(
        <UserContext.Provider value={{isDarkTheme, toggleDarkTheme,searchValue, setSearchValue}}>
            {children}
        </UserContext.Provider>
    )
}

export const useGlobalContext = ()=>useContext(UserContext);
