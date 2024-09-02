import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export const context3 = createContext({theme:"red", setTheme: (() => {}) as Dispatch<SetStateAction<string>>});

export const ThemeProvider = ({ children }: {children: ReactNode}) => {
    const [theme, setTheme] = useState<string>("red");
  
    return (
      <context3.Provider value={{ theme, setTheme }}>
        {children}
      </context3.Provider>
    );
  };