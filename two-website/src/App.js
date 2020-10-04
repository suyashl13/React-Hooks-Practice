import React from 'react'
import AppSection from './Components/AppSection'
import CardSection from './Components/CardSection'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import "./App.css"
export default function App() { 
    return (
        <>
            <Navbar/>
            <HeroSection />
            <CardSection />
            <AppSection/>
            <Footer/>
        </>
    );
}
