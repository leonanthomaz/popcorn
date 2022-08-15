import React, { useContext, useEffect, useState } from 'react'
import * as Style from './MovieStyles'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../shared/contexts/AuthContext'

import { CardMovie } from '../../components/Cards/Movie'
import { Share } from '../../components/Share'

export const Movie = () => {
    const { user } = useContext(AuthContext)
    const movieId = useParams()
    const [ movie, setMovie ] = useState([])

    useEffect(()=>{
        let filme = `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR`;
        axios.get(filme).then((response)=>{
            setMovie([response.data])
        })
    }, [movieId.id])

    return (
        <Style.Container>
            <CardMovie movie={movie} id={movieId.id} />
        </Style.Container>
    )
}
