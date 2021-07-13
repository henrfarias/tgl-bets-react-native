import React, { useRef } from 'react';
import { LayoutAnimation, Platform, UIManager } from 'react-native';
import { Container } from './styles'; 

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Card: React.FC = ({ children }) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  return (
     <Container>
       {children}
     </Container>
  );
}

export default Card;