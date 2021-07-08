import React from 'react';
import { Container, Number } from './styles';

type Props = {
  index: number;
}

const GameNumber: React.FC<Props> = ({ index }) => {
  return (
     <Container>
       <Number>{`${index}`.padStart(2, '0')}</Number>
     </Container>
  );
}

export default GameNumber;