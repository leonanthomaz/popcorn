import React, { useContext, useEffect, useState } from 'react'
import * as Style from './HeaderStyles'
import { Navbar } from '../Navbar'
import { AuthContext } from '../../shared/contexts/AuthContext'
import LogoImg from '../../shared/img/pop.png'
import { Link } from 'react-router-dom'
import { MovieContext } from '../../shared/contexts/MovieContext'
import { SearchList } from '../Search'

export const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const { text, setText, handleCloseSearch, searchMovie, setSearchMovie } = useContext(MovieContext)
    const [blackHeader, setBlackHeader] = useState();
    const [ openNavbar, setOpenNavbar ] = useState(false)

    useEffect(() => {
        const scrollLinstener = () => {
          if(window.scrollY > 10){
            setBlackHeader(true);
          }else{
            setBlackHeader(false);
          }
        }
        window.addEventListener('scroll', scrollLinstener);
        return () => {
          window.removeEventListener('scroll', scrollLinstener);
        }
    }, []);

    const handleOpenNavbar = () => {
      setOpenNavbar(!openNavbar)
    }

  return (
    <Style.Container blackHeader={blackHeader}>
        
        <Style.Left>
            <Style.Menu>
                <Navbar/>
            </Style.Menu>
            <Link to='/'>
              <Style.Logo>
                  <img src={LogoImg} alt='' />
              </Style.Logo>
            </Link>
        </Style.Left>
        
       <Style.Right>
            {/* <Style.User>
                <Style.UsernameGroup user={user}>
                  <Style.Username onClick={handleOpenNavbar}>
                    { user ? user.username : ''}
                  </Style.Username>
                  { user ? <Style.Icon/> : ''}
                    
                </Style.UsernameGroup>
            </Style.User> */}
            
            <Style.Search>
              <Style.SearchIconGroup>
                <Style.SearchIcon text={text}/>
                <Style.IconClose text={text} onClick={handleCloseSearch}/>
              </Style.SearchIconGroup>
              <Style.SearchInput value={text} onChange={(e => setText(e.target.value))} placeholder='Pesquise...'>
              </Style.SearchInput>
            </Style.Search>   
            { text !== '' || searchMovie !== '' ? 
            <SearchList searchMovie={searchMovie} text={text} setText={setText}/>
            : ""}

       </Style.Right>
    </Style.Container>
  )
}
