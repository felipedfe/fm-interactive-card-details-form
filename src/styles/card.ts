import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const Container = styled.div`
  
`;

export const CardImage = styled.img`
  width: clamp(25vw, 40vw, 45vw);
  max-width: 450px;
  min-width: 350px;

    @media all and (max-width: ${theme.breakpoints.md}) {
      width: clamp(60vw, 80vw, 80vw);
      /* max-width: 500px; */
      min-width: 300px;
    };
  `;