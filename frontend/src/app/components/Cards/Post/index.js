import React, { useState, useEffect } from 'react'
import { ApiBackend } from '../../../shared/services/api/ApiBackend';
import * as Style from './CardPost.Styles'

import TimeAgo from 'javascript-time-ago'
import pt from 'javascript-time-ago/locale/pt'
TimeAgo.addDefaultLocale(pt)
const timeAgo = new TimeAgo('pt-BR')



export default function CardPost({ movieId, posts }) {
    const [ userPost, setUserPost ] = useState([])

    useEffect(() => {
        const fetchUser = async () => {
          const res = await ApiBackend.get(`/users/${posts.map(e => e.userId)}`);
          setUserPost(res.data);
        };
        fetchUser();
    }, [movieId]);

    useEffect(()=>{
        const getUsers = async()=>{
            try{
              await ApiBackend.get(`/users/all`).then(response => setUserPost(response.data))
              .catch(err => console.log(err))
            }catch(err){
              console.log(err)
            }
        }
        getUsers()
      },[userPost])

    return (
        posts.length > 0 ?
        <Style.Container>
            <h2>▶ Comentários</h2>
            <Style.Box>
                {posts.map((item, key) => {
                    return(
                        <div key={key}>
                            <Style.Title>
                                {/* { userPost.map((i) => {
                                    if(item.userId === i?._id){
                                    return i.username
                                    }
                                })} */}
                                <h4>User PopCorn</h4>
                                <span>{timeAgo.format((new Date(item.createdAt)))}</span>
                            </Style.Title>
                            <Style.Comment>
                                {item.desc}
                            </Style.Comment>
                            <Style.LikeGroup>
                                <Style.LikeCount>{item.likes.length} gostaram deste comentario!</Style.LikeCount>
                            </Style.LikeGroup>
                           
                        </div>
                    )
                })}
               
            </Style.Box>
            
        </Style.Container>
        : ""
    )
}
