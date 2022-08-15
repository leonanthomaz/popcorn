import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`

  position: absolute;
  z-index: 8;
  width: 100%;
  background: green;
  transition: 0.3s ease-in-out;
  margin-top: 40px;
  width: 0px;
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: 0.3s ease-in-out;


`

export const List = styled.div`
background: ${({ text }) => (text ? 'red' : 'green')};
right: ${({ text }) => (text ? '0px' : '-1000px')};
/* margin-top: ${({ text }) => (text ? '10px' : '70px')}; */
/* right: ${({ text }) => (text ? '0' : '-1000px')}; */
transition: 0.3s ease-in-out;
margin-top: 15px;

position: relative;
width: 330px;
height: 300px;
overflow-y: scroll;
border: none;
scroll-behavior: smooth;

 @media(max-width: 760px){
  width: 220px;
  margin-right: 80px;
} 
::-webkit-scrollbar { 
	display: none;
}
padding: 1rem;
color: white;
/* transition: 0.3s ease-in-out; */
transition: all ease 0.5s;
/* margin-top: 50px; */

hr{
  border-bottom: 2px solid white;
}

`

export const LinkMovie = styled(Link)`
color: white;
line-height: 15px;
text-decoration: none ;
transition: 0.3s ease-in-out;

@media(max-width: 760px){
  line-height: 20px;
}

:hover{
  color: yellow;
}
`
// export const Logo = styled.div``
// export const Logo = styled.div``