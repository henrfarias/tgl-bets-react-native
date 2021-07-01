import React, { useContext } from 'react';
import { Container, ContainerButton, ContainerButtons } from './styles';

import Form from '../Form';
import Input from '../Input';
import FormButton from '../FormButton';
import SecondaryFormButton from '../SecondaryFormButton';
import { AuthScreenContext } from '../../contexts/AuthScreenContext';

const ForgotPassword: React.FC = () => {
  const { setAuthScreen } = useContext(AuthScreenContext);

  return (
    <Container>
      <Form title='Reset password'>
        <Input label='Email' />
        <FormButton title='Send Link' />
      </Form>
      <ContainerButtons>
        <ContainerButton>
          <SecondaryFormButton
            title='Back'
            isBack
            onPress={() => setAuthScreen('LOGIN')}
          />
        </ContainerButton>
        <ContainerButton>
          <SecondaryFormButton
            title='Sign Up'
            onPress={() => setAuthScreen('REGISTER')}
          />
        </ContainerButton>
      </ContainerButtons>
    </Container>
  );
};

export default ForgotPassword;
