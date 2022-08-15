import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`

padding-top: 10px;

.login-body{
    padding: 20px;
    margin-top: 50px;
    color: white;

    h2{
      margin-bottom: -10px;
    }
}

.login-box-main{

    margin: auto;
    max-width: 500px;
    height: auto;
    box-shadow: 0.4em 0.3em 0.7em black; 
    border-radius: 10px; 
}

.login-box{
    flex-direction: column;
    display: flex;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;
    padding: 5px;

    h2{
      margin-top: 20px;
      font-weight: 900;
    }

    i{
      padding-bottom: 5px;
    }
}

.label-float{
    position: relative;
    padding-top: 13px;
    background: #141414;
    color: white;}
  
.label-float input{
    background: #141414;
    color: white;
    border: 1px solid #141414;
    border-bottom: 1px solid white;
    outline: none;
    width: 300px;
    padding: 10px;
    font-size: 16px;
    transition: all .1s linear;
    -webkit-transition: all .1s linear;
    -moz-transition: all .1s linear;
    -webkit-appearance:none;
}
  
  .label-float input:focus{
    border: 2px solid red;
    color: white;
    border-radius: 5px;

  }
  
  .label-float input::placeholder{
    color:transparent;
  }
  
  .label-float label{
    pointer-events: none;
    position: absolute;
    top: calc(50% - 8px);
    left: 15px;
    transition: all .1s linear;
    -webkit-transition: all .1s linear;
    -moz-transition: all .1s linear;
    background-color: #141414;
    padding: 5px;
    box-sizing: border-box;
  }
  
  .label-float input:requiblack:invalid + label:before{
    content: '*';
  }
  .label-float input:focus + label,
  .label-float input:not(:placeholder-shown) + label{
    font-size: 13px;
    top: 0;
    color: white;
}

@media (max-width: 760px){
    .login-box-main{
        box-shadow: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .label-float input{
        width: 250px;
    }
}

`

export const Button = styled.button`
width: 200px;
padding: 5px;
background: red;
color: white;
transition: all ease 0.5s;
cursor: pointer;
border-radius: 5px;
border: 2px solid red;

:hover{
  background: white;
  border: 2px solid white;
  color: red;
  transition: all ease 0.5s;
}

`

export const ButtonLink = styled(Link)`
width: 100px;
padding: 5px;
text-decoration: none;
background: red;
color: white;
transition: all ease 0.5s;
border-radius: 5px;
cursor: pointer;

:hover{
  background: white;
  border: 2px solid white;
  color: red;
  transition: all ease 0.5s;
}

`