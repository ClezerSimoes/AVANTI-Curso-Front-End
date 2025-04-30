import React, {createContext, useState, useContext} from 'react'

const ThemeContexto = createContext()

const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme =() => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
    }

  return (
    <ThemeContexto.Provider value = {{theme, toggleTheme}}>
        {children}
    </ThemeContexto.Provider>
  )
}

export default ThemeContext

export const useTheme = () => {
    const context = useContext(ThemeContexto)
    if (!context){
        throw new Error("useTheme deve ser usado com o themeProvider");
        
    }
    return context
}