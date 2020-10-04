import React, { useState } from 'react'
import PackageContext from "./context"

export default function Provider(props) {
    const [themeData, setThemeData] = useState({
        theme: "light"
    });
    return (
        <PackageContext.Provider value={{
            data : themeData,
            switchThemeToDark : ()=>{
                setThemeData({theme : "dark"})
            }
        }}>
            {props.children}
        </PackageContext.Provider>
    )
}
