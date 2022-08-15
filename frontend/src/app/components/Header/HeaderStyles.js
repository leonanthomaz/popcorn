import styled from 'styled-components';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
width: 100%;
position: fixed;
display: flex;
justify-content: space-between;
background: ${({ blackHeader }) => (blackHeader ? '#141414' : 'transparent')};
z-index: 999;
transition: 0.3s ease-in-out;
/* margin-top: -10px; */
height: 80px;
`;

export const Left = styled.div`
display: flex;
justify-content: center;
padding: 10px;
margin: 10px;
gap: 10px;

@media(min-width: 760px){
    flex-direction: row-reverse;
}
`;

export const Right = styled.div`

display: flex;
justify-content: center;
padding: 10px;
gap: 10px;

`;

export const Logo = styled.div`
margin-top: 8px;
margin-left: 30px;
width: 100px;

img{
    width: 100%;
}
`
export const Menu = styled.div`
margin-top: 15px;

@media(min-width: 760px){
    right: 10px;
}

`

export const User = styled.div`
margin-right: 30px;

`

export const Icon = styled(FaUserCircle)`
font-size: 22px;
margin-top: 10px;

`;

export const UsernameGroup = styled.div`
display: ${({ user }) => (user ? 'block' : 'none')};
display: flex;
margin-top: 15px;


@media(max-width: 760px){
    margin-top: 10px;
}
`;

export const UserMenu = styled.div`
position: absolute;
transition: 0.3s ease-in-out;
margin-top: 40px;
z-index: 9999;
background: ${({ openNavbar }) => (openNavbar ? 'red' : '')};
right: ${({ openNavbar }) => (openNavbar ? '0' : '-10000px')};
width: 200px;


`;

export const UsernameMenuBody = styled.div`
display: flex;
justify-content: center;
flex-direction: column;

    .title{
        border: 2px solid green ;     
    } 

    .body{

        display: flex;
        justify-content: center;
        flex-direction: column;
        border: 2px solid green ;
    }

    .footer{
       border: 2px solid green ;
    }
`;

export const XMenu = styled(AiOutlineClose)`
font-size: 22px;
margin-top: 10px;
float: right;

`;

export const Username = styled.p`
font-size: 16px;
margin-right: 10px;
`;


export const Action = styled.div`
margin-top:${({ user }) => (user ? '' : '20px')};
float: right;
cursor: pointer;
border-radius: 10px;
padding: 5px;
margin-top: 10px;
margin-left: 10px;
`

export const ActionLogin = styled(Link)`
    color: white;
    text-decoration: none;
    margin-top: 10px;
    transition: all ease 0.5s;

    :hover{
        color: red;
        transition: all ease 0.5s;
    }
`;




export const Search = styled.div`
margin: 10px;
display: flex;
justify-content: center;

`;

export const SearchInput = styled.input`

height: 35px;
width: 300px;
border-radius: 15px;
/* position: absolute; */

text-indent: 5%;

::placeholder{
   text-indent: 5%;
}

:focus{
   outline: none
}

@media(max-width: 760px){
    width: 120px;
    margin-top: 5px;
}

`;

export const SearchIconGroup = styled.div`
margin-top: 10px;
position: absolute;
margin-left: 250px;
color: gray;

@media(max-width: 760px){
    position: 'none';
    margin-top: 15px;
    margin-left: 86px;
}
`;

export const SearchIcon = styled(FaSearch)`
display: ${({ text }) => (text ? 'none' : 'block')};
transition: 0.3s ease-in-out;

`

export const IconClose = styled(AiOutlineClose)`
display: ${({ text }) => (text ? 'block' : 'none')};
transition: 0.3s ease-in-out;

`
