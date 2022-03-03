import { createContext, useState} from "react";

export const ThemeContext = createContext();

export const ThemeState = (props) =>
{
    const [theme, setTheme] = useState('light')

    const toggle = () => {
        if (theme === "light") {
            setTheme("dark")
            setMsg("dark mode has been enabled", "success")
            document.body.style.backgroundColor = "rgb(33,37,41)";
        }
        else {
            setTheme("light")
            setMsg("light mode has been enabled", "success")
            document.body.style.backgroundColor = "white";
        }
    }
        const [alerts, setAlerts] = useState({ message: null, type: null })

    const setMsg = (msg,type) =>
    {
    setAlerts({ message: msg, type: type+" " })
    setTimeout(() =>
    {
      setAlerts({ message: null, type: null })
    },1500)
        
    }
    return (
        <ThemeContext.Provider value={{theme,toggle,setMsg , alerts}}>
        {props.children}
        </ThemeContext.Provider>
        )
    
}
