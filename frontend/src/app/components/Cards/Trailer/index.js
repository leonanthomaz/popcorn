import React from 'react'
import * as Style from './TrailerStyles'

export const CardTrailer = ({ videos }) => {
    return (
      <Style.Container>
        <Style.ListArea>
            {videos && videos.length !== 0 ? videos.map((video, index)=>{
                    let url = `https://www.youtube.com/watch?v=${video.key}`                              
                    return(
                        <Style.TrailerItem key={index}>
                          <Style.TrailerLink href={url}>{video.name}</Style.TrailerLink>
                        </Style.TrailerItem>
                    )
                }) : <h5>Nenhum vídeo encontrado...</h5>
            }
        </Style.ListArea>
      </Style.Container>
    )
}
