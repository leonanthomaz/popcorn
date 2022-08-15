import React, { useContext, useRef } from "react";
import * as C from './LoginStyles'
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/contexts/AuthContext";
import { loginStart } from "../../shared/services/api/ApiBackend";

export const Login = () => {

    const email = useRef()
    const password = useRef()
    const { dispatch, error } = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault()
        loginStart(
            {email: email.current.value, password: password.current.value}, dispatch
        )
        window.location('/')
    }

    return(
        <C.Container>
            <div className="login-body">
                <div className="login-box-main">
                    <div className="login-box">
                        <h2>Login</h2>
                        { error !== null ? <p style={{ color: 'red'}}>{error}</p> : ""}
                        <i>Faça login para continuar</i>
                        <form  onSubmit={handleClick}>
                           
                            <div className="label-float">
                                <input 
                                ref={email}
                                type="email" 
                                placeholder=" "/>
                                <label>Email</label>
                            </div>
                            <div className="label-float">
                                <input 
                                ref={password}
                                type="password" 
                                placeholder=" " 
                                required=""/>
                                <label>Senha</label>
                            </div>
                            <br />
                            <C.Button type="submit">Enviar</C.Button>
                            <br /><br />
                            <p>Não tem uma conta? <C.ButtonLink to='/register'>Registre-se!</C.ButtonLink></p>
                            {/* <Link onClick={handleClick} className="btn" to="/">Entrar</Link> */}
                        </form>
                    </div>
                </div>
            </div>
        </C.Container>
    )
}