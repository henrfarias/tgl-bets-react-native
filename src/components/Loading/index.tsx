import React from 'react';
import { ActivityIndicator } from 'react-native';
import { theme } from '../../global/theme';
import { Container, Indicator } from './styles';

const Loading: React.FC = () => {
  return (
     <Container>
       <Indicator>
        <ActivityIndicator size={125} color={theme.colors.primary} />
       </Indicator>
     </Container>
  );
}

export default Loading;