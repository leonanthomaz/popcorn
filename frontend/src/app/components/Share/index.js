import React, { useContext, useRef, useState, useEffect } from 'react'
import * as Style from './ShareStyles'

import { AuthContext } from "../../shared/contexts/AuthContext";
// import { BsCardImage, BsFillCameraFill, BsFillShareFill, BsTagFill, BsFillPinMapFill } from "react-icons/bs";
// import axios from "axios";
import { ApiBackend } from '../../shared/services/api/ApiBackend'

export const Share = ({ movieId }) => {

    const [ status, setStatus ] = useState({
        type: 'erro',
        msg: null
    })

    const { user } = useContext(AuthContext);
    const desc = useRef();
    const spoiler = useRef();
    const vote = useRef();

    const submitHandler = async (e) => {
      e.preventDefault();
      const newPost = {
        userId: user._id,
        movieId: movieId,
        spoiler: spoiler.current.value,
        vote: vote.current.value,
        desc: desc.current.value,
      };
      try {
        await ApiBackend.post("/posts", newPost);
        window.location.reload();
      } catch (err) {
        setStatus({
          type: 'erro',
          msg: err.response.data.msg
        })
        console.log(err)
      }
    };
    return (
      <Style.Container>
          <h1>Comente este filme!</h1>  
          { status.type === 'erro' ? <p style={{ color: 'red', textAlign: 'center'}}>{status.msg}</p> : "" }        
          <Style.Box>
          <Style.Form onSubmit={submitHandler}>

            <Style.Input
            placeholder={"Poste sua resenha, " + user.username + "!"}
            className="shareInput"
            ref={desc}
            />
            <Style.SelectGroup >
              <p>Qual sua nota para este filme? </p>
              <Style.Select ref={vote}>
                <Style.Option value={1}>1</Style.Option>
                <Style.Option value={2}>2</Style.Option>
                <Style.Option value={3}>3</Style.Option>
                <Style.Option value={4}>4</Style.Option>
                <Style.Option value={5}>5</Style.Option>
              </Style.Select>

              <p>Contém spoiler?</p>
              <Style.Select ref={spoiler}>
                <Style.Option value={false}>Não</Style.Option>
                <Style.Option value={true}>Sim</Style.Option>
              </Style.Select>

            </Style.SelectGroup>
            <Style.Button type="submit">Publicar</Style.Button>
          </Style.Form>

        </Style.Box>
      </Style.Container>
    )
}
