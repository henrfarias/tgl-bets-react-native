import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { Container } from './styles'; 

const Card: React.FC = ({ children }) => {
  const heightAnim = useRef(new Animated.Value(0)).current;


  return (
     <Container>
       {children}
     </Container>
  );
}

export default Card;