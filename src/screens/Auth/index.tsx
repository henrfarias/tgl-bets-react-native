import React, { useState } from 'react';
import { Container } from './styles';

import ScreenContainer from '../../components/Layout/ScreenContainer';
import Logo from '../../components/Layout/Logo';
import Login from '../../components/Login';
import Register from '../../components/Register';
import ForgotPassword from '../../components/ForgotPassword';

export type authTypes = 'LOGIN' | 'REGISTER' | 'PASSWORD';

const Auth: React.FC = () => {
  const [authScreen, setAuthScreen] = useState<authTypes>('REGISTER');

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
