import React,{ createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export default function ThemeProvide ({children}) {
    const [themeColor, setThemeColor] = useState("#2c2b6e")
    document.body.style.backgroundColor = themeColor;
    return(
        <ThemeContext.Provider value={{themeColor,setThemeColor}}>
            {children}
        </ThemeContext.Provider>
    );
}
export const useThemeColor = ()=>{
   const context = useContext(ThemeContext);
   const {themeColor, setThemeColor} = context
    return ({
        themeColor,setThemeColor

    });
}