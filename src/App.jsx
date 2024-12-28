import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Presentacion from "./Components/Presentacion/Presentacion";
import Titulo from "./Components/Titulo/Titulo";
import AcercaDe from "./Components/AcercaDe/AcercaDe";
import Galeria from "./Components/Galeria/Galeria";
import Testimonios from "./Components/Testimonios/Testimonios";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";
import Maps from "./Components/Maps/Maps";
import ReproductorVideo from "./Components/ReproductorVideo/ReproductorVideo";
import ModelosCamionetas from "./Components/ModelosCamionetas/ModelosCamionetas";
import MetodosPago from "./Components/MetodosPago/MetodosPago";

const App = () =>{

    const [playState, setPlayState] = useState(false);

    return(
        <div>
            <Navbar/>
            <Presentacion/>
            <div className="container">
                <AcercaDe setPlayState={setPlayState}/>
                <Titulo subTitulo="MODELOS DE CAMIONETAS" titulo="¡Conoce nuestra flota de vehículos!"/>
                <ModelosCamionetas/>
                <Titulo subTitulo="Galeria" titulo="Fotos De Nuestros vehiculos"/>
                <Galeria/>
                <Titulo subTitulo="MÉTODOS DE PAGO" titulo="¡Elige la forma de pago que más te convenga!"/>
                <MetodosPago/>
                <Titulo subTitulo="OPINIONES" titulo="Lo Que Dicen Nuestros Clientes"/>
                <Testimonios/>
                <Titulo subTitulo="Contactanos" titulo="Ponte en Contacto"/>
                <Contacto/>
                <Maps/>
                
            </div>
            
            <Footer/>
            <ReproductorVideo playState ={playState} setPlayState ={setPlayState}/>
        </div>
    )
}

export default App