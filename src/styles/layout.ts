import styled from "styled-components";
import { theme } from '@/styles/theme';
import bgDesktop from '@/assets/bg-main-desktop.png';
import bgMobile from '@/assets/bg-main-mobile.png';

export const MainContainer = styled.main`
  position: relative;
  background-color: ${theme.colors.background};
  /* max-width: ${theme.breakpoints.lgx}; */
  margin: auto;
  /* min-height: 100vh; */
  height: 100vh;
  z-index: -1;
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url(${bgDesktop});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 35vw;
  height: 100vh;
  z-index: -1;

  @media all and (max-width: ${theme.breakpoints.md}) {
    width: 100vw;
    height: 30vh;
    max-height: 250px;
    background-image: url(${bgMobile});
  }
`

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 2rem;
`;
