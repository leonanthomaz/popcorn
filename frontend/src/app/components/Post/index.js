import React, { useContext, useEffect, useState } from "react";
import * as Style from './PostStyles'
import { Link } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../shared/contexts/AuthContext";

import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

import { ApiBackend } from '../../shared/services/api/ApiBackend';

import iconLike from '../../shared/img/heart.png'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import TimeAgo from 'javascript-time-ago'
import pt from 'javascript-time-ago/locale/pt'
TimeAgo.addDefaultLocale(pt)
const timeAgo = new TimeAgo('pt-BR')

export const Post = ({ post }) => {
    const { user } = useContext(AuthContext)

    const [like, setLike] = useState(post?.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [ userPost, setUserPost ] = useState([])
    const [smShow, setSmShow] = useState(false);

    useEffect(() => {
      setIsLiked(post?.likes.includes(user._id));
    }, [user._id, post?.likes]);

    const likeHandler = () => {
      try {
        ApiBackend.put("/posts/" + post._id + "/like", { userId: user._id });
      } catch (err) {}
      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
    };

    useEffect(()=>{
      const getUsers = async()=>{
          try{
            await ApiBackend.get(`/users/${post.userId}`).then(response => setUserPost(response.data))
            .catch(err => console.log(err))
          }catch(err){
            console.log(err)
          }
      }
      getUsers()
    },[])


    const deletePost = async () => {
      try{
        await ApiBackend.delete(`/posts/${post._id}`, { userId: user._id })
        window.location.reload()
      }catch(err){
        console.log(err)
      }
    }

    console.log(post)

    return (
      <Style.Container>
        <Style.Box>
          <Style.Title>
            <h3>@{userPost.username}</h3>
            
            <span className="postDate">{timeAgo.format((new Date(post.createdAt)))}</span>
            <Style.Trash>
              { post.userId === user._id ? <BsTrash onClick={() => setSmShow(true)} /> : "" }
            </Style.Trash>
          </Style.Title>

            <Modal
                size="md"
                centered
                show={smShow}
                onHide={() => setSmShow(false)}
              >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm" style={{ color: 'black'}}>
                  Confirma a exclusão do post?
                </Modal.Title>
              </Modal.Header>

              <Modal.Body style={{ textAlign: 'center'}}>
                <div style={{ margin: '10px'}}>
                  <Button onClick={deletePost} style={{ 
                    margin: '10px',
                    background: 'red',
                    color: 'white',
                    border: 'none',
                    width: '100px'
                  }}>Sim</Button>
                  <Button closeButton onClick={() => setSmShow(false)} style={{ 
                    margin: '10px',
                    background: 'gray',
                    color: 'white',
                    border: 'none',
                    width: '100px'
                  }}>Não</Button>
                </div>
              </Modal.Body>

            </Modal>
          
  
          <Style.Info>
            <span>Spoiler: {post?.spoiler === true ? 
            <span className="spoiler" style={{ color: 'red'}}>Contém</span> : 
            <span className="noSpoiler" style={{ color: 'green'}}>Não contém</span>}</span>
            <span>Nota PopCorn: {post?.vote ? post?.vote : 'Sem voto'}</span>
          </Style.Info>

          <Style.Comment>
            {post?.desc}
          </Style.Comment>


          <Style.LikeGroup>
              <Style.Like>
                <img
                className="likeIcon"
                src={iconLike}
                onClick={likeHandler}
                alt=""
                />
              </Style.Like>
              <Style.LikeCount>
                {like} pessoas gostaram!
              </Style.LikeCount>
          </Style.LikeGroup>

        </Style.Box>
        
      </Style.Container>
    )
}
