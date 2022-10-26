import styled from 'styled-components'
import ImgBg from '../../images/TabManagerReal.gif';

export const HomepageContainer = styled.div`
    border: 1px solid #000;
    background-image: url(${ImgBg});
    background-size: cover;
    height: 100vh;
    max-height: 100%;
    max-width: 100%;
    width: 100vw;
`;

export const HomepageContent = styled.div`
    height: calc(100vh - 99%);
    max-height: 100%;
    width: 100vw;
    position: relative;
    top: calc(100vh - 60%);
`;

export const HomepageItems = styled.div`
    display: flex;
    flex-direction: column;
    justify content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-heigh 1;
    font-weight: bold;

    @media screen and (max-width: 650px){
        width: 100%;
    }
`;

export const HomepageH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 3px;
    color: rgb(80, 18, 20);
`;

export const HomepageP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
    color: rgb(80, 18, 20);
`;

export const HomepageBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: rgb(80, 18, 20);
    color: #fff;
    transition: 0.2s ease-out;

    &:hover{
        background: rgb(172, 145, 85);
        transition: .2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;