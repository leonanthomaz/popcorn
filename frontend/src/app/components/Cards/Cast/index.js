import React, { useState } from 'react'
import * as Style from './CardCastStyles'
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

export const CardCast = ({ cast }) => {
    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth /2);
        if(x > 0){
            x=0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth /2);
        let listw = cast.length * 170;
        if((window.innerWidth - listw) > x) {
            x = (window.innerWidth - listw) -60;
        }
        setScrollX(x);
    }

    return (
      <Style.Container>
        <Style.ArrowLeft onClick={handleLeftArrow}>
            <BiLeftArrow/>
        </Style.ArrowLeft>
        <Style.ArrowRight onClick={handleRightArrow}>
            <BiRightArrow/>
        </Style.ArrowRight>
        <Style.ListArea>
          <Style.CastRowList style={{
                    marginLeft: scrollX,
                    width: cast?.length * 180
            }}>
            { cast && cast.length !== 0 ? cast.map((item, index)=>{
              return(
                <Style.CastRowItem key={index} className='movie-cast2'>
                    <img src={item.profile_path ? `https://image.tmdb.org/t/p/w92/`+item.profile_path : "https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png"} alt={item.name} width={92} />
                    <h4 className="nome">{item.name}</h4>
                    <h6 className="personagem"><i>{item.character ? item.character : 'sem informação'}</i></h6>
                </Style.CastRowItem>
              )
            })
            : <h5>Não encontrado...</h5>}
          </Style.CastRowList>
        </Style.ListArea>
        
      </Style.Container>
    )
}
