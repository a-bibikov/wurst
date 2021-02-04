import React from 'react'
import './assets/styles/reset.css'
import './App.sass'
import Welcome from "./components/Welcome/Welcome"
import About from "./components/About/About"
import Cta from "./components/Cta/Cta"
import Products from "./components/Products/Products"
import Footer from "./components/Footer/Footer"
import Bottom from "./components/Bottom/Bottom"
import Gallery from "./components/Galllery/Gallery";
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

function App(props) {
    return (
        <div className="App">
            <Welcome modalShow={props.modal_show}/>
            <About galleryShow={props.gallery_show}/>
            <Cta app={props.app}/>
            <Products/>
            <Footer modalShow={props.modal_show}/>
            <Bottom/>
            <Modal app={props.app} modal_hide={props.modal_hide}/>
            <Gallery gallery_link={props.app.gallery_link} gallery={props.app.gallery} gallery_hide={props.gallery_hide}/>
            <Alert app={props.app} success_hide={props.success_hide}/>
        </div>
    )
}

export default App