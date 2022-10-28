import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #EBBA45;
    display: grid;
    align-items: center;
    top: 0;
    transition: .3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px') };
    
    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: rgb(80, 18, 20);
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 120px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(3, 60px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-in-out;
    text-decoration: none;
    color: rgb(80, 18, 20);
    cursor: pointer;

    &:hover{
        color: white;
        transition: .2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarBtn = styled.button`
    background: #501214;
    white-space: nowrap;
    padding: 16px 64px;
    color: white;
    font-size: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: .2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: .2s ease-in-out;
        background: white;
        color: rgb(80, 18, 20);
    }
`;