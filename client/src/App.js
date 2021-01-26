import React from 'react'
import './assets/styles/reset.css'
import './App.sass'
import Welcome from "./components/Welcome/Welcome"
import About from "./components/About/About"
import Cta from "./components/Cta/Cta"
import Products from "./components/Products/Products"
import Footer from "./components/Footer/Footer"
import Bottom from "./components/Bottom/Bottom"
import ModalContainer from "./containers/ModalContainer"

function App(props) {
    return (
        <div className="App">
            <Welcome modalShow={props.modal_show}/>
            <About/>
            <Cta/>
            <Products/>
            <Footer modalShow={props.modal_show}/>
            <Bottom/>
            <ModalContainer/>
        </div>
    )
}

export default App