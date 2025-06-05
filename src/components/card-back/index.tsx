import React from 'react';
import { Container, CardImage } from '@/styles/card';
import bgCardBack from '@/assets/bg-card-back.png'

const CardBack: React.FC = () => {
  return (
    <Container>
      <CardImage src={bgCardBack} alt='card back'/>
    </Container>
  )
}

export default CardBack;
