import React, { useContext, useRef } from 'react'
import { useState } from 'react'
import { MovieContext } from '../../shared/contexts/MovieContext'
import * as Style from './SearchStyles'
import { MovieModal } from '../MovieModal'
import { AuthContext } from '../../shared/contexts/AuthContext'

export const SearchList = ({ searchMovie, text, setText }) => {
  // const { text, setText, handleCloseSearch, searchMovie, setSearchMovie } = useContext(MovieContext)
  const { user } = useContext(AuthContext)

  const { target } = useRef()

  const handleClose = (e) => {
    if(e.target === target){
      setText('')
    }
  }

  return (
    <Style.Container >
      <Style.Wrapper>
        <Style.List text={text}
          onClick={(e)=>handleClose(e.target)}>
          {text !== '' ? searchMovie.map(item => {
            return(
              <Style.LinkMovie to={`/movie/${item.id}`}>
                  <p ref={target}>{item.title}</p>
                  <hr/>
              </Style.LinkMovie>
            )
          }) : ""}
        </Style.List>
      </Style.Wrapper>
    </Style.Container>
  )
}
