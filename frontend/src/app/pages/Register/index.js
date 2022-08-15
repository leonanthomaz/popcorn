import React, { useContext, useRef, useState } from "react";
import * as C from './RegisterStyles'
import { Link } from "react-router-dom";
import { ApiBackend } from "../../shared/services/api/ApiBackend";
import { useNavigate } from "react-router";

export const Register = () => {

    const [ status, setStatus ] = useState({
        type: 'erro',
        msg: null
    })

    const email = useRef()
    const username = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const navigate = useNavigate()


    const handleClick = async (e) => {
        e.preventDefault();
        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            confirmPassword: confirmPassword.current.value,
          };

          try {
            await ApiBackend.post("/auth/register", user);
            navigate("/login");
          } catch (err) {
            setStatus({
                type: 'erro',
                msg: err.response.data.msg
            })
            // console.log(err);
            console.log(err)
        }
      };

    return(
        <C.Container>
            <div className="login-body">
                <div className="login-box-main">
                    <div className="login-box">
                        <h2>Register</h2>
                        { status.type === 'erro' ? <p style={{ color: 'red'}}>{status.msg}</p> : "" }
                        <i>Faça login para continuar</i>
                        <form onSubmit={handleClick}>
                            <div className="label-float">
                                <input 
                                ref={username}
                                type="text" 
                                placeholder=" "/>
                                <label>Username</label>
                            </div>
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
                            <div className="label-float">
                                <input 
                                ref={confirmPassword}
                                type="password" 
                                placeholder=" " 
                                required=""/>
                                <label>Confirme sua senha</label>
                            </div>
                            <br />
                            <C.Button type="submit">Enviar</C.Button>
                            <br /><br />
                            <p>Tem uma conta? <C.ButtonLink to='/login'>Faça login!</C.ButtonLink></p>

                            {/* <Link className="btn" to="/">Entrar</Link> */}
                        </form>
                    </div>
                </div>
            </div>
        </C.Container>
    )
}