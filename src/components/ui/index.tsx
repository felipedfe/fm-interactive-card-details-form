import styled from 'styled-components';
import { theme } from '@/styles/theme';
import bgDesktop from '@/assets/bg-main-desktop.png';
import bgMobile from '@/assets/bg-main-mobile.png';

export const MainContainer = styled.main`
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  background-color: ${theme.colors.background};
  /* max-width: ${theme.breakpoints.lgx}; */
  margin: auto;
  min-height: 100vh;
`

// export const Background = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 2fr;
//   height: 100%;
// `

// export const ImageBackground = styled.div`
//   background: url(${bgDesktop});
//   background-size: cover;
//   background-position: center;
// `

export const CardImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 445px;
`

// export const CardContainer = styled.div`
//   position: relative;
//   background: url(${bgDesktop});
//   background-size: cover;
//   background-position: center;

// `

export const Background = styled.div`
  position: relative;
  background: url(${bgDesktop});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 35vw;
  height: 100vh;
  z-index: 0;

  @media all and (max-width: ${theme.breakpoints.md}) {
    width: 100vw;
    height: 30vh;
    background-image: url(${bgMobile});
    /* background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
  }
`

export const WhiteOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 25%;
  background-color: pink;
  z-index: 0;
`;


// export const CardContainer = styled.div`
//   background-image: url(${bgDesktop});
//   background-repeat: no-repeat;
//   background-position: left center;
//   background-size: 75% 100%;
//   background-color: red;

//   height: 100%;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;


export const FormContainer = styled.div`
  background-color: ${theme.colors.background};
  border: 2px solid lightgray;
`