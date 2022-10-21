import styled from 'styled-components'

export const HomepageContainer = styled.div`
    height: 100vh;
    background: linear-gradient(to right, rgb(0, 45, 98), rgb(0, 0, 0));
    max-height: 100%;
    width: 100vw;
`
export const HomepageContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    width: 100vw;
    padding: 0 rem calc((100vw - 1300px) / 2);
`
export const BottomBanner = styled.div`
    background: green;
    height: 80px;
    justify-content: center;
    position: absolute;
    bottom: 0;
`