import React, { useContext, useState } from 'react'
// import { Hooks } from '../../shared/contexts/HooksContext'
import * as Style from './NavbarStyles'
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { AuthContext } from '../../shared/contexts/AuthContext';
import { MovieContext } from '../../shared/contexts/MovieContext';

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext)  
  const { openNavbar,  handleOpenNavbar} = useContext(MovieContext)

  return (
    <Style.Container>
        <Style.NavbarIcon onClick={handleOpenNavbar}>
          {openNavbar ? <AiOutlineClose/> : <BiMenu/>}
        </Style.NavbarIcon>

        <Style.NavMenu openNavbar={openNavbar}>
            <Style.NavbarUL>
                <Style.NavbarLI onClick={handleOpenNavbar}><Style.NavbarLink to={'/'}>Home</Style.NavbarLink></Style.NavbarLI>
                { user ? 
                <>
                <Style.NavbarLI onClick={handleOpenNavbar}><Style.Logout onClick={logout}>Sair</Style.Logout></Style.NavbarLI>
                </>
                : 
                <>
                <Style.NavbarLI onClick={handleOpenNavbar}><Style.NavbarLink to={'/login'}>Login</Style.NavbarLink></Style.NavbarLI>
                <Style.NavbarLI onClick={handleOpenNavbar}><Style.NavbarLink to={'/register'}>Cadastrar</Style.NavbarLink></Style.NavbarLI>
                </>
                }
            </Style.NavbarUL>
        </Style.NavMenu>

    </Style.Container>
  )
}
