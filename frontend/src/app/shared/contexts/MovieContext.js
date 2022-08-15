
import { createContext, useState, useEffect } from "react";
import { API_TRENDING, GENERAL_API, API_KEY, FEATURED_API } from '../services/api/ApiTMDB'
import axios from 'axios'

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {

    const [ text, setText ] = useState('')
    const [ searchMovie, setSearchMovie ] = useState([])

    useEffect(()=>{
        const getMovie  = async () => {
        let URL_SEARCH = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&language=pt-BR&query=${text}`;
        let URL_INIT = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&language=pt-BR&query=all`;
        await axios(text ? URL_SEARCH : URL_INIT )
        // await axios(URL_SEARCH)
        // await axios.get(URL_SEARCH)
        .then(response=> setSearchMovie(response.data.results))
        .catch(err => setText(''))
        }
        getMovie()
    },[text])

    const handleCloseSearch = () => {
        setText('')
        setSearchMovie([])
    }

    
    const [ movie, setMovie ] = useState([])
    const [ poster, setPoster ] = useState()
    const [ closeSearch, setCloseSearch ] = useState(false)
    const [loading, setLoading] = useState(true);
    const [ openNavbar, setOpenNavbar ] = useState(false)
    const [ open, setOpen ] = useState(false)

    const [ openCast, setOpenCast ] = useState(false)
    const [ openInfo, setOpenInfo ] = useState(false)
    const [ openTrailer, setOpenTrailer ] = useState(false)
    const [ closeIcon, setCloseIcon ] = useState(true)

    const handleOpenCast = () => {
        setOpenCast(!openCast)
    }

    const handleOpenInfo = () => {
        setOpenInfo(!openInfo)
    }

    const handleOpenTrailer = () => {
        setOpenTrailer(!openTrailer)
    }

    const handleOpenNavbar = () => {
        setOpenNavbar(!openNavbar)
        setOpen(!open)
    }

    const handleOpen = () => {
        setOpen(!open)
    }

    // const handleCloseIcon = () => {
    //     setOpenTrailer(!openTrailer)
    //     setOpenInfo(!openInfo)
    //     setOpenCast(!openCast)
    // }

     useEffect(()=>{
         setTimeout(()=>{
             axios.get(FEATURED_API)
                .then(response => setMovie(response.data.results))
         }, 10000)
         setLoading(false) 
     },[movie])
    
    useEffect(()=>{
        const loadAll = async () => {
            let radomChosen = Math.floor(Math.random() * (movie.length) +1)
            let chosen = movie[radomChosen]
            setPoster(chosen)
        }
        loadAll()
    },[movie])


    return(
        <MovieContext.Provider value={{ 
            poster, 
            setPoster, 
            movie, 
            setMovie,
            closeSearch,
            setCloseSearch,
            loading,
            setLoading,
            openNavbar,
            handleOpenNavbar,
            handleOpen,
            open,
            openCast,
            setOpenCast,
            handleOpenCast,
            openInfo,
            setOpenInfo,
            handleOpenInfo,
            openTrailer,
            setOpenTrailer,
            handleOpenTrailer,
            closeIcon,
            setCloseIcon,
            text,
            setText,
            handleCloseSearch,
            searchMovie,
            setSearchMovie
            }}>
            {children}
        </MovieContext.Provider>
    )
}