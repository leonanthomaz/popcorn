
import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const PostContext = createContext()

export const PostProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);

    // useEffect(()=>{
    //     let filme = `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR`;
    //     axios.get(filme).then((response)=>{
    //         setMovie([response.data])
    //     })
    // }, [])

    return(
        <PostContext.Provider value={{}}>
            {children}
        </PostContext.Provider>
    )
}