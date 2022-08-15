import styled from 'styled-components';

export const Container = styled.div`
padding: 10px;
flex: 1;
color: white;
margin: 10px;
margin: auto;
margin-top: 20px;

@media(max-width: 760px){
  display: block;
}

h1{
  text-align: center;
}

`

export const Box = styled.div`

   display: flex;
   justify-content: center;


    @media(max-width: 760px){
    display: block;
    }

`;

export const Form = styled.form`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 800px;

  @media(max-width: 760px){
    width: auto;
  }
  
  padding: 1rem;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(255, 255, 255, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(255, 255, 255, 0.68);
  /* border: 2px solid red; */
`;

export const Input = styled.input`
    border: none;
    width: 80%;
    max-width: 500px;
    height: 50px;
    padding: 5px;
    border-radius: 7px;

    :focus {
      outline: none;
    }

    @media (max-width: 760px){
      height: 80px;
    }
`;


export const SelectGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    border: 2px solid red;
    margin: 10px;
    padding-bottom: 20px;
    padding: 20px;

    @media (max-width: 760px){
      flex-direction: column;
      align-items: center;
    }

`;

export const Select = styled.select`
    width: 60px;
    text-align: center;
    height: 35px;
    margin-left: 20px;
    text-align: center;
    
    @media (max-width: 760px){
      margin: 10px;
    }
`;

export const Option = styled.option`
    margin-left: 20px;

`;

export const ButtonGroup = styled.div`
    
`;

export const Button = styled.button`
  border: none;
    padding: 7px;
    border-radius: 5px;
    background-color: green;
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    color: white;
    width: 300px;
    margin: auto;
`;

// export const Logo = styled.div``
// export const Logo = styled.div``