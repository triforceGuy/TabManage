import styled from 'styled-components'

export const SetUpContainer = styled.div`
    min-height: 100%;
    min-width: 1024px;
    width: 100%;
    height: auto;
    position: fixed; 
    top: 0; 
    left: 0;
`

export const SetUpContent = styled.div`
    height: calc(100vh - 99%);
    max-height: 100%;
    width: 100vw;
    position: relative;
    top: calc(100vh - 60%);
`;

export const SetUpItems = styled.div`
    width: 100%;
    height: auto;
    position: fixed; 
    top: 100vh - 140px; 
    left: 0;
`;

export const SetUpHeading = styled.h1`
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 3px;
    color: rgb(80, 18, 20);
`;

export const SetUpStepName = styled.h2`
    font-size: 1.5rem;
    letter-spacing: 3px;
    color: rgb(80, 18, 20);
`;

export const SetUpDesc = styled.p`
    font-size: 1rem;
    margin-bottom: 2rem;
    color: rgb(80, 18, 20);
`;

export const SetUpimg = styled.img`
    width: 24vh;
    height: 12vh;
    float: left;
  }
`;
