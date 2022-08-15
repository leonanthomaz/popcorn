import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;


export const Featured = styled.div`

height: 100%;
width: 100%;

`;

export const FeaturedHorizontal = styled.div`

width: inherit;
height: inherit;
background: linear-gradient(to right, #141414 30%, transparent 70%);
display: flex;
flex-direction: column;
justify-content: center;    

`;

export const FeaturedVertical = styled.div`

width: inherit;
height: inherit;
background: linear-gradient(to top, #141414 10%, transparent 90%);
        

`;

export const Wrapper = styled.div`
padding: 15px;
margin: 10px;
margin-top: 50px;
`

export const Title = styled.h1`

font-size: 42px;
font-weight: 900;
padding-bottom: 1rem;

@media(max-width: 760px){
    font-size: 28px;
}

`

export const Overview = styled.div`
max-width: 600px;

text-overflow: ellipsis;
white-space: wrap;

font-size: 20px;
padding-bottom: 25px;

@media(max-width: 760px){
    font-size: 14px;
}

`;

export const GroupButton = styled.div`
margin-top: 30px;

`;

export const Button = styled.a`
border: 2px solid red;
padding: 10px;

background: red;
color: white;
text-decoration: none;

:hover{
    color: yellow
}

`


// text-overflow: ellipsis;
//   white-space: nowrap;
// export const Button = styled.button`
// float: right;
// `;

// export const Logo = styled.div``
// export const Logo = styled.div``