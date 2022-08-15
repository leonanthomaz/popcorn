import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
`

export const Box = styled.div`

height: 100vh;
background-color: #52525288;

`

export const Background = styled.div`

width: inherit;
height: inherit;
background: linear-gradient(to bottom, #111 5%, transparent 70%);

`

export const Main = styled.div`

`;



export const Wrapper = styled.div`

display: flex;
justify-content: space-between;

@media (max-width: 760px){
    justify-content: center;
    flex-direction: column;
}

`;

export const Left = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 2;
    font-size: 15px;

    padding: 10px;
    margin-top: 100px;

    @media (max-width: 760px){
        justify-content: center;
        flex-direction: column;
        margin-right: 0px;
        margin-top: 0px;
    }



`;

export const Right = styled.div`
    padding: 20px;
    margin-top: 100px;
    margin-right: 80px;
    background: #222222c0;

    @media (max-width: 760px){
        font-size: 14px;
        margin-right: 0px;
        margin-top: 0px;
        /* height: 100px; */
        /* display: none; */
    }

`;

export const Poster = styled.div`
width: 300px;
float: left;
margin-left: 50px;
flex: 1;

img{
    width: 100%;
}

    @media (max-width: 760px){
        margin: auto;
        width: 150px;
        margin-top: 100px;
    }
`;

export const ButtonGroupTitle = styled.div`
h1{
    text-align: center;
    padding-top: 50px;

    @media (max-width: 760px){
    padding-top: 100px;
    }
}

`



export const ButtonGroup = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;
gap: 10px;

@media (max-width: 760px){
    margin: 15px;
}

`;

export const Button = styled.button`
    width: 200px;
    background: red;
    color: white;
    padding: 10px;
    cursor: pointer;

    @media (max-width: 760px){
        width: 120px;
    }
`;

export const IconCloseGroup = styled.div`
    display: ${({ closeIcon }) => (closeIcon ? 'none' : 'flex')};

    flex-direction: row;
    float: right;
    margin-left: 15px;
    width: 80px;
    justify-content: center;
`;


export const IconClose = styled(AiOutlineClose)`
    cursor: pointer;
    margin-top: 12px;
`;

export const IconCloseP = styled.p`
   font-size: 14px;
`;

export const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Info = styled.div`
    h1{
        text-align: center;
        font-size: 42px;

        @media (max-width: 760px){
            font-size: 32px;
        }
    }

    p{
        font-size: 18px;
        margin-top: 50px;

        @media (max-width: 760px){
            font-size: 14px;
            margin-top: 0px;

        }
}





`;

export const InfoMain = styled.div`
    display: ${({ openInfo }) => (openInfo ? 'flex' : 'none')};
    justify-content: center;
    padding-top: 20px;
`;

export const InfoList = styled.div`
    display: grid;
    grid-template-columns: 220px 220px 220px;
    gap: 10px;
    text-align: center;
    margin: 15px;

    @media (max-width: 760px){
        grid-template-columns: 120px 120px 120px;
    }

`;

export const InfoItem = styled.div`
    padding: 20px;
    border: 2px solid white;
    border-radius: 10px;

    @media (max-width: 760px){
        padding: 10px;
        font-size: 12px;
    }
    
`;

export const Cast = styled.div`
    display: ${({ openCast }) => (openCast ? 'flex' : 'none')};
    h1{
        text-align: center;
        
    }
    @media( max-width: 760px){
        margin-top: ${({ openCast }) => (openCast ? '0' : '50px')};
        font-size: 12px;
    }
`;

export const Trailer = styled.div`
    display: ${({ openTrailer }) => (openTrailer ? 'flex' : 'none')};    
    
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;

`;



export const Comment = styled.div`
    
    /* max-width: 800px; */

   @media( max-width: 760px){
    flex-direction: column;
    justify-content: center;
   }
`;

