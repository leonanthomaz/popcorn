import React, { useEffect, useState} from 'react'
// import Modal from 'react-modal';
import { IMAGES_API } from '../../shared/services/api/ApiTMDB';
import axios from 'axios';
import { ApiBackend } from '../../shared/services/api/ApiBackend'
import CardPost from '../Cards/Post';
import * as Style from './MovieModalStyles'
// import { AiOutlineClose } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';

export const MovieModal = ({ poster_path, backdrop_path, title, overview, movieId, userId}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [posts, setPosts] = useState([])
    const [smShow, setSmShow] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await ApiBackend.get(`/posts/${movieId}`)
          setPosts(
            res.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
          );
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <img src={poster_path ? IMAGES_API + poster_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"}  onClick={() => setSmShow(true)}  alt={title}   />     

              <Modal
                size="md"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  {title}
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Style.Modal>
               
                <div className='modalWrapper'>
                  <div className='poster'>
                    <img src={`${IMAGES_API}${backdrop_path}`} alt={title}/>
                  </div>
                  <h2 style={{ textAlign: 'center'}}>{title}</h2>
                  <Style.Overview>
                    {overview}
                  </Style.Overview>
                  <CardPost movieId={movieId} posts={posts} />
                </div>
                </Style.Modal>
              </Modal.Body>

            </Modal>
            
        </div>
    )
}
