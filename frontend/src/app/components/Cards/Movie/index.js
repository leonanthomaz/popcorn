import React, { useState, useEffect, useContext, useCallback } from 'react'
import * as Style from './CardMovieStyles'
import { IMAGES_API, API_KEY } from '../../../shared/services/api/ApiTMDB'
import axios from 'axios'

import { FaMoneyBill, FaVoteYea } from "react-icons/fa";
import { BiTime, BiRocket, BiStar } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import { useNavigate } from "react-router";

import { CardCast } from '../Cast';
import { CardTrailer } from '../Trailer';
import { Share } from '../../Share';
import { Post } from '../../Post';

import { ApiBackend } from '../../../shared/services/api/ApiBackend';
import { AuthContext } from '../../../shared/contexts/AuthContext';


import TimeAgo from 'javascript-time-ago'
import pt from 'javascript-time-ago/locale/pt'
import { MovieContext } from '../../../shared/contexts/MovieContext';
TimeAgo.addDefaultLocale(pt)
const timeAgo = new TimeAgo('pt-BR')



export const CardMovie = ({ movie, id }) => {
    const { user } = useContext(AuthContext)
    const { 
      openCast, 
      setOpenCast, 
      handleOpenCast,
      openInfo,
      setOpenInfo, 
      handleOpenInfo,
      openTrailer,
      setOpenTrailer, 
      closeIcon,
      setCloseIcon,
      handleOpenTrailer
     } = useContext(MovieContext)

    const navigate = useNavigate()
    
    const [ cast, setCast ] = useState()
    const [ posts, setPosts ] = useState([]);
    const [ videos, setVideos ] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=pt-BR`)
        .then((response)=>{
            //console.log(response.data.cast)
            setCast(response.data.cast) 
        }).catch(err => {
          alert('Falha ao encontrar o filme desejado.. Tente novamente!') 
          navigate("/");
        })
    }, [id]);

    useEffect(() => {
      const fetchPosts = async () => {
        const res = await ApiBackend.get("/posts/all")
        setPosts(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      };
      fetchPosts();
    }, [id]);

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=videos`).then((response)=>{
          setVideos(response.data.videos.results)  
      })
    }, [id]);

    return (
      <Style.Container >
          {movie && movie.map((item, index)=>{
            return(
              <Style.Box key={index}
                style={{
                  backgroundImage: `url(${ item.backdrop_path ? IMAGES_API + item.backdrop_path : 'https://wwcsff.com/wp-content/uploads/2019/05/film-background-1334067869u9d.jpg' })`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
              <Style.Background>
                <Style.Main>
                    <Style.Wrapper>
                      <Style.Left>
                        <Style.Poster>
                          <img src={IMAGES_API + item.poster_path} alt='' />
                        </Style.Poster>
                      </Style.Left>
                    <Style.Right>
                      <Style.Info>
                        <h1>{item.title}</h1>
                        <p>{item.overview ? item.overview : <Style.InfoMain openInfo={openInfo} openCast={openCast}>
                        <Style.InfoList>
                            <Style.InfoItem><BiRocket/> Lançado {timeAgo.format((new Date(item.release_date)))} ({new Date(item.release_date).getDay(item.release_date) + "/" + new Date(item.release_date).getMonth(item.release_date) + "/" + new Date(item.release_date).getFullYear(item.release_date)})</Style.InfoItem>
                            {/* <Style.InfoItem><BiRocket/> Lançado {new Date(item.release_date).getDay(item.release_date) + "/" + new Date(item.release_date).getMonth(item.release_date) + "/" + new Date(item.release_date).getFullYear(item.release_date)}</Style.InfoItem> */}
                            <Style.InfoItem><FaMoneyBill/> Bilheteria: {
                            item.revenue > 0 || item.revenue !== '0' || 
                            item.revenue !== undefined || 
                            item.revenue !== null ? item.revenue : ''}</Style.InfoItem>
                            <Style.InfoItem><FaMoneyBill/> Orçamento: {
                            item.budget > 0 || item.budget !== '0' || 
                            item.budget !== undefined || 
                            item.budget !== null ? item.budget : ''}</Style.InfoItem>
                            <Style.InfoItem><BiTime/> Duração: {item.runtime} minutos</Style.InfoItem>
                            {/* <Style.InfoItem>Status: {item.status === 'Released' ? 'Lançado' : 'Para estrear' }</Style.InfoItem> */}
                            <Style.InfoItem><BiStar/> Nota: {item.vote_average}</Style.InfoItem>
                            <Style.InfoItem><FaVoteYea/> Votos: {item.vote_count}</Style.InfoItem>
                        </Style.InfoList>
                      </Style.InfoMain>}</p>
                      </Style.Info>
                    </Style.Right>
                  </Style.Wrapper>
                </Style.Main>
              </Style.Background>

              <Style.ButtonGroupTitle>
                <h1>Informações</h1>
              </Style.ButtonGroupTitle>

              <Style.ButtonGroup>
                <Style.Button onClick={handleOpenCast}>Elenco</Style.Button>
                <Style.Button onClick={handleOpenInfo}>Informações</Style.Button>
                <Style.Button onClick={handleOpenTrailer}>Trailler</Style.Button>
              </Style.ButtonGroup>
             
              <Style.BoxWrapper>
              <Style.InfoMain openInfo={openInfo}>
                <Style.InfoList>
                    <Style.InfoItem><BiRocket/> Lançamento: {new Date(item.release_date).getDay(item.release_date) + "/" + new Date(item.release_date).getMonth(item.release_date) + "/" + new Date(item.release_date).getFullYear(item.release_date)}</Style.InfoItem>
                    {/* <Style.InfoItem><BiRocket/> Lançado {timeAgo.format((new Date(item.release_date)))} ({new Date(item.release_date).getDay(item.release_date) + "/" + new Date(item.release_date).getMonth(item.release_date) + "/" + new Date(item.release_date).getFullYear(item.release_date)})</Style.InfoItem> */}
                    {/* <Style.InfoItem><BiRocket/> Lançado {new Date(item.release_date).getDay(item.release_date) + "/" + new Date(item.release_date).getMonth(item.release_date) + "/" + new Date(item.release_date).getFullYear(item.release_date)}</Style.InfoItem> */}
                    <Style.InfoItem><FaMoneyBill/> Bilheteria: {
                    item.revenue > 0 || item.revenue !== '0' || 
                    item.revenue !== undefined || 
                    item.revenue !== null ? item.revenue : ''}</Style.InfoItem>
                    <Style.InfoItem><FaMoneyBill/> Orçamento: {
                    item.budget > 0 || item.budget !== '0' || 
                    item.budget !== undefined || 
                    item.budget !== null ? item.budget : ''}</Style.InfoItem>
                    <Style.InfoItem><BiTime/> Duração: {item.runtime} minutos</Style.InfoItem>
                    {/* <Style.InfoItem>Status: {item.status === 'Released' ? 'Lançado' : 'Para estrear' }</Style.InfoItem> */}
                    <Style.InfoItem><BiStar/> Nota: {item.vote_average}</Style.InfoItem>
                    <Style.InfoItem><FaVoteYea/> Votos: {item.vote_count}</Style.InfoItem>
                </Style.InfoList>
              </Style.InfoMain>
              </Style.BoxWrapper>

              <Style.BoxWrapper>
                <Style.Cast openCast={openCast}>
                  <CardCast cast={cast}/>
                </Style.Cast>
              </Style.BoxWrapper>

              <Style.BoxWrapper>
                <Style.Trailer openTrailer={openTrailer}>  
                  <CardTrailer videos={videos} />
                </Style.Trailer>
              </Style.BoxWrapper>
              

              { user ? 
              <Style.Comment>
                <Share movieId={id} />
                {posts.filter(e => e.movieId === id).map((p) => (
                  <Post key={p._id} post={p} user={user} />
                ))}
              </Style.Comment>

              : "Faça login para comentar!"}

              </Style.Box>
            )
          })}
          {/* <Share /> */}
      </Style.Container>
    )
}
