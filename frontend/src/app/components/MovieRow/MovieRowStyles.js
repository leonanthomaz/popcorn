import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
 margin-bottom: 30px;   

`

export const HomeMain = styled.div`
margin-top: 100px;
`

export const HomeH1 = styled.h1`
color: white;
font-size: 50px;

`;

// export const Title = styled(Link)`

// color: white;
// text-decoration: none;
// margin-left: 30px;
// font-size: 32px;
// font-weight: 900;

// :hover{
//     color: yellow;
// }
// `;

export const Title = styled.a`

color: white;
text-decoration: none;
margin-left: 30px;
font-size: 32px;
font-weight: 900;

:hover{
    color: yellow;
}
`;



export const h2 = styled.h2`
    margin: 0px 0px 0px 30px;
   
`;

export const ArrowLeft = styled.div`
    position: absolute;
    width: 50px;
    margin-top: 30px;
    height: 290px;
    background-color: rgb(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    opacity: 0;
    z-index: 3;
    transition: all ease 0.5s;
    cursor: pointer;

    left: 0;
    opacity: 0;

    :hover{
        opacity: 1;
    }

    @media (max-width:760px){
        opacity: 1;
    }
`;

export const ArrowRight = styled.div`
    position: absolute;
    width: 30px;
    margin-top: 30px;
    height: 290px;
    background-color: rgb(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    opacity: 0;
    z-index: 3;
    transition: all ease 0.5s;
    cursor: pointer;

    right: 0;
    opacity: 0;

    :hover{
        opacity: 1;
    }

    @media (max-width:760px){
        opacity: 1;
    }
`;

export const ListArea = styled.div`
overflow-x: hidden;
padding-left: 30px;

`

export const MovieRowList = styled.div`
overflow-x: hidden;
padding-left: 20px;
transition: all ease 0.5s;
padding-bottom: 10px;
padding-top: 20px;

`

export const MovieRowItem = styled.div`
display: inline-block;
width: 160px;
margin: 5px;
height: 300px;
/* border: 2px solid #cececebb; */
-webkit-box-shadow: 0px 0px 16px -8px rgba(255, 255, 255, 0.68);
box-shadow: 2px 2px 16px -8px rgba(255, 255, 255, 0.68);
border-radius: 12px;

img{
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.3s;
}

img:hover{
    transform: scale(1);
    border-radius: 5px;
}

`

export const Vote = styled.div`
float: right;
color: white;
border-radius: 10px;
display: flex;
justify-content: center;
`

export const Star = styled.div`
width: 20px;
margin-top: 11px;
color: yellow;

img{
    width: 100%;
}
`

export const Number = styled.p`
font-size: 15px;
margin-top: 15px;
margin-right: 10px;
`


// export const Logo = styled.div``
// export const Logo = styled.div``