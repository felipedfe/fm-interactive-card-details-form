import React from 'react';
import {
  MainContainer,
  Background,
  Content,
  CardContainer,
} from '@/styles/layout';
import CardFront from './components/card-front';
import CardBack from './components/card-back';

const App:React.FC = () => {
  return (
    <MainContainer>
      <Background />
      <Content>
        <CardContainer>
          <CardFront />
          <CardBack />
        </CardContainer>

        <div style={{ width: '100%' }}>
          <p>formulário</p>
        </div>
      </Content>
    </MainContainer>
  )
}

export default App
