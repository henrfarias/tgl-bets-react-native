import React from 'react';
import { StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Container,
  HomeButton,
  Title,
  Decoration,
  NavContainer,
  NavButton
} from './styles';
import { theme } from '../../global/theme';

const Header: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor='transparent' barStyle='dark-content' />
      <Container>
        <HomeButton>
          <Title>TGL</Title>
          <Decoration />
        </HomeButton>
        <NavContainer>
        <NavButton>
            <MaterialCommunityIcons
              name='logout'
              size={24}
              color={theme.colors.button}
            />
          </NavButton>
        </NavContainer>
      </Container>
    </>
  );
};

export default Header;
