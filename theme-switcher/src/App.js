import React, { useState } from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import ThemeContext from './Context/ThemeContext'


function App() {
    const themeHook = useState("light")
    return (
        <div>
            <ThemeContext.Provider value={themeHook}>
                <div>
                    <Header/>
                    <HeroSection/>
                </div>
            </ThemeContext.Provider>
        </div>
    )
}

export default App
