import React from 'react'
import "./Register.css"
import { Link } from 'react-router-dom';
import imgregistro from '/Andres/sistemas/5 Semestre//Proyecto-Integrador/Proyecto/src/Assets/registro.jpeg'

const Register = () => {
  return (
    <div className='container_1'>
        <div className="containerLogin">
            <div className="container-img">
                <img src={imgregistro} alt="" className='tamaño-imagen'></img>
            </div>
            <div className="container-datos">
                <div className="padre">
                    <div className="card card-body shadow">
                        <form>
                            <h2 className="login-title">Registro</h2>
                            <h6>Nombres</h6>
                            <input type="text" placeholder='Ingresar los nombres' className='ingresoNombre' />
                            <h6>Apellidos</h6>
                            <input type="text" placeholder='Ingresar los apellidos ' className='ingresoApelli' />
                            <h6>Teléfono</h6>
                            <input type="text" placeholder='Ingresar número teléfono ' className='ingresoTelefono' />
                            <h6>Email</h6>
                            <input type="email" placeholder='Ingresar correo ' className='ingresoemail' />
                            <h6>Contraseña</h6>
                            <input type="password" placeholder='Ingresar contraseña ' className='ingresocontra' />
                            <h6>Confirmar contraseña</h6>
                            <input type="password" placeholder='Confirmar contraseña ' className='confirmarcontra' />
                            <div className="links">
                                <Link style={{color:'black  ', textDecoration: 'none'}}className= "link3" to="/">Crear</Link>
                                <Link style={{color:'black  ', textDecoration: 'none'}}className= "link4" to="/">Atras</Link>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Register