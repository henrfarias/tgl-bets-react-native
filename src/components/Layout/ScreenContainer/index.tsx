import React from 'react';
import { Container } from './styles';

const ScreenContainer: React.FC = ({ children }) => {
  return (
    <Container 
      showsVerticalScrollIndicator={false}
      automaticallyAdjustContentInsets={false} 
    >
      {children}
    </Container>
  );
}

export default ScreenContainer;