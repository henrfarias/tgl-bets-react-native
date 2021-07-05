import React, { useContext } from 'react';
import { Container } from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { useAppSelector } from '../../store/hooks';

import ScreenContainer from '../../components/Layout/ScreenContainer';
import Logo from '../../components/Layout/Logo';
import Login from '../../components/Login';
import Register from '../../components/Register';
import ForgotPassword from '../../components/ForgotPassword';
import Loading from '../../components/Loading';

const Auth: React.FC = () => {
  const { authScreen } = useContext(AuthContext);
  const loading = useAppSelector((state) => state.load);
  
  return (
    <>
      <ScreenContainer>
        <Logo />
        <Container>
          {authScreen === 'LOGIN' && <Login />}
          {authScreen === 'REGISTER' && <Register />}
          {authScreen === 'PASSWORD' && <ForgotPassword />}
        </Container>
      </ScreenContainer>
      { loading && <Loading />} 
    </>
  );
};

export default Auth;
