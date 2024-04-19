
import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import imglogin from '/Andres/sistemas/5 Semestre/Proyecto-Integrador/Proyecto/src/Assets/login.jpeg'

const Login = () => {
  return (
    <div className='container'>
      <div className="containerLogin">
        <div className="container-img">
          <img src={imglogin} alt="" className='tamaño-imagen'></img>
        </div>
        <div className="container-datos">
          <div className="padre">
            <div className="card card-body shadow">
              <form>
                <h2 className="login-title">Login</h2>
                <span className='mensaje'>estado de inicio sesion</span>
                <h6>Email</h6>
                <input type="text" placeholder='Ingresar email' className='ingresoEmail' />
                <h6>Password</h6>
                <input type="password" placeholder='Ingresar contraseña ' className='ingresoContra' />
                <button className='boto'>Iniciar sesión</button>
                <div className="link">
                    <Link style={{color:'black  ', textDecoration: 'none'}}className= "link1" to="/Register">Do you not have an account? Sign up</Link>
                    <Link style={{color:'black  ', textDecoration: 'none'}}className= "link2" to="/ForgetPass">Forgot your password?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
