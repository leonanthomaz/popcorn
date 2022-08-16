import styled from 'styled-components';

export const Container = styled.div``
// export const Logo = styled.div``
// export const Logo = styled.div``

export const ListArea = styled.div`
overflow-x: hidden;
padding-left: 30px;
width: 96vw;
`

export const CastRowList = styled.div`
overflow-x: hidden;
padding-left: 20px;
transition: all ease 0.5s;
padding-bottom: 10px;
padding-top: 20px;
/* width: auto; */
`

export const CastRowItem = styled.div`
display: inline-block;
width: 160px;
margin: 5px;
height: 350px;
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
}

h4{
    text-align: center;
    height: 50px;

    font-size: 18px;
    
    @media (max-width: 760px){
        font-size: 14px;
    }
}

h6{
    text-align: center;  
    font-size: 14px;

    @media (max-width: 760px){
        font-size: 12px;
    }  
}
`

export const ArrowLeft = styled.div`
    position: absolute;
    width: 50px;
    margin-top: 60px;
    height: 270px;
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
    margin-top: 60px;
    height: 270px;
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