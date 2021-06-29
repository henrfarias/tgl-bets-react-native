import React, { useState } from 'react';
import { Container } from './styles';

import ScreenContainer from '../../components/Layout/ScreenContainer';
import Logo from '../../components/Layout/Logo';
import Login from '../../components/Login';

export type authTypes = 'LOGIN' | 'REGISTER' | 'PASSWORD';

const Auth: React.FC = () => {
  const [authScreen, setAuthScreen] = useState<authTypes>('LOGIN');

  return (
    <ScreenContainer>
      <Logo />
      <Container>
        {authScreen === 'LOGIN' && <Login />}
      </Container>
    </ScreenContainer>
  );
};

export default Auth;
