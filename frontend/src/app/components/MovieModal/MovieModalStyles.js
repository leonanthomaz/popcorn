import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`

`

export const Icon = styled(AiOutlineClose)`
float: right;
font-size: 32px;
cursor: pointer;
`
export const Modal = styled.div`
color: black;


h2{
    text-align: center;
    font-size: 32px;
    font-weight: 900;
    margin-top: 20px;
}

.poster{
    margin-top: 20px;
    max-width: 700px;
    margin: auto;


    img{
        width: 100%;
    }

    @media(max-width: 760px){
        max-width: auto;
        img{
        width: 100%;
        }
    }

}
    
`

export const Overview = styled.div`
padding: 20px;
-webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`

// export const Logo = styled.div``
// export const Logo = styled.div``