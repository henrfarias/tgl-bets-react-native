import React, { useContext } from 'react';
import { Container } from './styles';
import { AuthScreenContext } from '../../contexts/AuthScreenContext';

import ScreenContainer from '../../components/Layout/ScreenContainer';
import Logo from '../../components/Layout/Logo';
import Login from '../../components/Login';
import Register from '../../components/Register';
import ForgotPassword from '../../components/ForgotPassword';



const Auth: React.FC = () => {
  const { authScreen } = useContext(AuthScreenContext);
  return (
      <ScreenContainer>
        <Logo />
        <Container >
          {authScreen === 'LOGIN' && <Login />}
          {authScreen === 'REGISTER' && <Register />}
          {authScreen === 'PASSWORD' && <ForgotPassword />}
        </Container>
      </ScreenContainer>
  );
};

export default Auth;
