import React from "react";
import './MetodosPago.css';
import paypalImg from '../../assets/paypal.png';
import transferenciaImg from '../../assets/transferencia.png';
import efectivoImg from '../../assets/efectivo.png';
import tarjetaImg from '../../assets/tarjeta.png';

const MetodosPago = () => {
    const metodos = [
        { id: 1, img: paypalImg, nombre: "PayPal", descripcion: "Paga de forma segura a través de tu cuenta PayPal." },
        { id: 2, img: transferenciaImg, nombre: "Transferencia Bancaria", descripcion: "Realiza una transferencia desde tu banco de confianza." },
        { id: 3, img: efectivoImg, nombre: "Efectivo", descripcion: "Paga en efectivo al momento de abordar." },
        { id: 4, img: tarjetaImg, nombre: "Tarjeta de Crédito/Débito", descripcion: "Aceptamos todas las tarjetas principales." },
    ];

    return (
        <div className="metodosPago">
            <div className="grid-container">
                {metodos.map(metodo => (
                    <div key={metodo.id} className="card">
                        <img src={metodo.img} alt={metodo.nombre} className="metodo-img" />
                        <h4>{metodo.nombre}</h4>
                        <p>{metodo.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MetodosPago;
