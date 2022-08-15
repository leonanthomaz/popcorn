import React,{ useEffect, useState, useContext } from 'react'
import * as Style from './MovieRowStyles'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MovieContext } from '../../shared/contexts/MovieContext'
import { AuthContext } from '../../shared/contexts/AuthContext'
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { Spinner } from '../Spinner'
import { MovieModal } from '../MovieModal'
import { AiOutlineStar } from "react-icons/ai";

export const MovieRow = ({ url, title }) => {
    const { user } = useContext(AuthContext)
    const { loading, setLoading } = useContext(MovieContext)

    const [ movie, setMovie ] = useState([])
    const [scrollX, setScrollX] = useState(0)

    useEffect(()=>{
      axios.get(url)
      .then(response => setMovie(response.data.results))
      setLoading(false) 
    },[])


    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth /2);
        if(x > 0){
            x=0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth /2);
        let listw = movie.length * 175;
        if((window.innerWidth - listw) > x) {
            x = (window.innerWidth - listw) -10;
        }
        setScrollX(x);
    }

    return (
      <Style.Container>
        <Style.Title>
        ▶ {title} 
        </Style.Title>

        { loading ? <Spinner/> : 
        
        <div className="movieRow">

            <Style.ArrowLeft onClick={handleLeftArrow}>
                <BiLeftArrow/>
            </Style.ArrowLeft>
            <Style.ArrowRight onClick={handleRightArrow}>
                <BiRightArrow/>
            </Style.ArrowRight>

            <Style.ListArea>
                <Style.MovieRowList style={{
                    marginLeft: scrollX,
                    width: movie.length * 180
                }}>
                
                {movie.length > 0 &&  movie.map((item, key) => (

                     user ? 
                    
                    <Style.MovieRowItem key={key} className="movieRow_item" style={{ cursor: 'pointer'}}>
                        <Link to={`/movie/${item.id}`}>
                            <Style.Vote>
                                <Style.Star>
                                    <AiOutlineStar/>
                                </Style.Star>
                                <Style.Number>
                                    {Math.ceil(item.vote_average)}
                                </Style.Number>
                        
                            </Style.Vote>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>
                        </Link>
                    </Style.MovieRowItem>
                
                :   

                <Style.MovieRowItem key={key} className="movieRow_item" style={{ cursor: 'pointer'}}>
                    <Style.Vote>
                        <Style.Star>
                        <AiOutlineStar/>
                        </Style.Star>
                        <Style.Number>
                            {Math.ceil(item.vote_average)}
                        </Style.Number>
                    </Style.Vote>

                    <MovieModal 
                    key={key} 
                    backdrop_path={item.backdrop_path}
                    poster_path={item.poster_path} 
                    movieId={item.id}
                    userId={item.userId}
                    title={item.title}
                    overview={item.overview}
                    />
                </Style.MovieRowItem>
               

                ))}
                </Style.MovieRowList>
            </Style.ListArea>
        </div>
        }
      </Style.Container>
    )
}
