import React from 'react';
import { Container, Link, Text, ContainerButton } from './styles';

import Form from '../Form';
import Input from '../Input';
import FormButton from '../FormButton';
import SecondaryFormButton from '../SecondaryFormButton';

const Login: React.FC = () => {
  return (
    <Container>
      <Form title='Authentication'>
        <Input
          label='Email'
          textContentType='emailAddress'
          keyboardType='email-address'
        />
        <Input label='Password' />
        <Link>
          <Text>I forget my password</Text>
        </Link>
        <FormButton title='Log In' />
      </Form>
      <ContainerButton>
        <SecondaryFormButton title='Sign Up' />
      </ContainerButton>
    </Container>
  );
};

export default Login;
