import React, { useContext } from 'react';
import { Container, Link, Text, ContainerButton } from './styles';
import { AuthScreenContext } from '../../contexts/AuthScreenContext';

import Form from '../Form';
import Input from '../Input';
import FormButton from '../FormButton';
import SecondaryFormButton from '../SecondaryFormButton';

const Login: React.FC = () => {
  const { setAuthScreen } = useContext(AuthScreenContext);

  return (
    <Container>
      <Form title='Authentication'>
        <Input
          label='Email'
          textContentType='emailAddress'
          keyboardType='email-address'
        />
        <Input label='Password' />
        <Link onPress={() => setAuthScreen('PASSWORD')}>
          <Text>I forget my password</Text>
        </Link>
        <FormButton title='Log In' />
      </Form>
      <ContainerButton>
        <SecondaryFormButton
          title='Sign Up'
          onPress={() => setAuthScreen('REGISTER')}
        />
      </ContainerButton>
    </Container>
  );
};

export default Login;
