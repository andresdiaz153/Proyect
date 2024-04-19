import React from 'react'
import "./ForgetPass.css"
import { Link } from 'react-router-dom';

const ForgetPass = () => {
  return (
    
    <div className="contain">
        <div className="contenido">
            <h2 className='titulo'>Ingrese el correo con el que se registró</h2>
            <input type="text" placeholder='Ingresar email' className='ingresoEmail1' />
            <div className="botones">
                <h4><button className='enviar'>Enviar link</button></h4>
                <Link style={{color:'black  ', textDecoration: 'none'}}className= "link5" to="/">Atras</Link>  
            </div>
        </div>
    </div>
  )
}

export default ForgetPass