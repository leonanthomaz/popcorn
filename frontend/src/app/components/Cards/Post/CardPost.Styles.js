import styled from "styled-components";

export const Container = styled.div`

h2{
    color: black;
    text-align: start;
    margin-left: 15px;
}
`;

export const Box = styled.div`

border-radius: 10px;
-webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
padding: 1rem;
margin: 10px;

max-width: 800px;
padding: 10px;
margin: auto;

`
export const Title = styled.div`

display: flex;
justify-content: space-between;
flex-direction: row;

padding: 10px;

h4{
    margin: 10px;
    font-size: 16px;
}

span{
    font-size: 16px;
    margin-top: 7px;
    float: right;
}
`

export const Info = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
padding-bottom: 1rem;

font-size: 14px;

span{
    margin-top: 18px;
}
`

export const Comment = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
padding-bottom: 1rem;

-webkit-box-shadow: 0px 0px 16px -8px rgba(255, 255, 255, 0.68);
box-shadow: 2px 2px 16px -8px rgba(255, 255, 255, 0.68);
padding: 1.5rem;
border-radius: 10px;

`

export const Trash = styled.div`
    margin-top: 12px;
    margin-right: 5px;
    cursor: pointer;
`

export const LikeGroup = styled.div`
    display: flex;
    padding-top: 1rem;
    padding: 15px;

`;

export const Like = styled.div`
    width: 24px;
    cursor: pointer;

    img{
        width: 100%;
    }
`;

export const LikeCount = styled.div`
   font-size: 16px;
   margin-top: 7px;
   margin-left: 7px;
   color: red;
`;