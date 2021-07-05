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
import { useAppDispatch } from '../../store/hooks';
import { logout } from '../../store/reducers/bearer.reducer';

const Header: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <StatusBar backgroundColor='transparent' barStyle='dark-content' />
      <Container>
        <HomeButton>
          <Title>TGL</Title>
          <Decoration />
        </HomeButton>
        <NavContainer>
          {children}  
          <NavButton onPress={() => dispatch(logout())}>
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
