import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
`

export const NavbarLink = styled(Link)`
    color: white;
    text-decoration: none;

    :hover{
        color: yellow;
    }

    :visited{
        color: white;
    }

    :link{
        color: gray;
    }

    :active{
        color: red;
    }
`;

export const NavMenu = styled.nav`

    padding-top: 15px;

    @media (max-width: 760px){
        width: 250px;
        left: ${({ openNavbar }) => (openNavbar ? '0' : '-1000px')};
        /* transition: all ease 0.5s; */
        position: absolute;
        transition: 0.3s ease-in-out;
        margin-top: 40px;
        z-index: 9999;
        background: ${({ openNavbar }) => (openNavbar ? 'red' : '')};
    }

`;

export const NavbarIcon = styled.div`

    display: none;

    @media (max-width: 760px){
        display: block;
        float: left;
        font-size: 30px;
        cursor: pointer;
        margin-top: -17px;
    }
`;

export const NavbarUL = styled.ul`

    display: flex;
    flex-direction: row;
    margin-top: -25px;
    list-style: none;
    

    @media (max-width: 760px){
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        margin-top: 0px;

    }

`;

export const NavbarLI = styled.li`
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
`;


export const Logout = styled.div`
cursor: pointer;
`


// export const Logo = styled.div``
// export const Logo = styled.div``