import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

export default function ThemeToggler() {
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return (
        <div onClick={()=>{
            setThemeMode(themeMode === "light" ? "dark" : "light")
        }}>
            <button>{themeMode === "light" ? "Turn Off" : "Turn On"}</button>
        </div>
    )
}
