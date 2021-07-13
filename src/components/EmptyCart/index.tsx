import React from 'react';
import { Container, Warn } from './styles';

const EmptyCart: React.FC = () => {
  return (
     <Container>
       <Warn>Carrinho vazio...</Warn>
     </Container>
  );
}

export default EmptyCart;