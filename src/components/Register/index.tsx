import React from 'react';
import { Container, ContainerButton } from './styles';

import Form from '../Form';
import Input from '../Input';
import FormButton from '../FormButton';
import SecondaryFormButton from '../SecondaryFormButton';

const Register: React.FC = () => {
  return (
    <Container>
      <Form title='Registration'>
        <Input label='Name' />
        <Input label='Email' />
        <Input label='Password' />
        <FormButton title='Register' />
      </Form>
      <ContainerButton>
        <SecondaryFormButton title='Back' isBack />
      </ContainerButton>
    </Container>
  );
};

export default Register;
