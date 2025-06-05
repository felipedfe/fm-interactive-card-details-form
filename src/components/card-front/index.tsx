import React from 'react';
import { Container, CardImage } from '@/styles/card';
import bgCardFront from '@/assets/bg-card-front.png'

const CardFront: React.FC = () => {
  return (
    <Container style={{ transform: 'translate(-80px)' }}>
      <CardImage src={bgCardFront} alt='card front' />
    </Container>
  )
}

export default CardFront;
