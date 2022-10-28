import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { ImMenu } from 'react-icons/im';

export const Nav = styled.nav`
    background: rgb(172, 145, 85);
    height: 90px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavDec = styled.nav`
    background: rgb(80, 18, 20);
    height: 50px;
    display: flex;
    justify-content: center;
    font-weight: 700;S
    padding: 100vh - 90px;S
`;

export const NavLink = styled(Link)`
    color: black;
    font-size: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 20px;
    cursor: pointer;
    color: #black;

    p{
        transform: translate(-175%, 100%);
        font-weight: bold;
        color: black;
    }
`;

export const Bars = styled(ImMenu)`
    font-size: 2rem;
    transform: translate(-50%, 15%);
`;