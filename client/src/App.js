import React from 'react'
import './assets/styles/reset.css'
import './App.sass'
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Cta from "./components/Cta/Cta";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Bottom from "./components/Bottom/Bottom";

function App() {
    return (
        <div className="App">
            <Welcome/>
            <About/>
            <Cta/>
            <Products/>
            <Footer/>
            <Bottom/>
        </div>
    )
}

export default App