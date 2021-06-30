import React from 'react';
import { View } from 'react-native';
import { Container, Footer, TextFooter } from './styles';

const ScreenContainer: React.FC = ({ children }) => {
  return (
    <View style={{flex: 1}}>
      <Container 
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false} 
      >
        {children}
      </Container>
      <Footer><TextFooter>Copyright 2020 Luby Software</TextFooter></Footer>
    </View>
  );
}

export default ScreenContainer;