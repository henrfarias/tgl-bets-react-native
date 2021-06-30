import React from 'react';
import { Container, ContainerButton, ContainerButtons } from './styles';

import Form from '../Form';
import Input from '../Input';
import FormButton from '../FormButton';
import SecondaryFormButton from '../SecondaryFormButton';

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <Form title='Reset password'>
        <Input label='Email' />
        <FormButton title='Send Link' />
      </Form>
      <ContainerButtons>
        <ContainerButton>
          <SecondaryFormButton title='Back' isBack />
        </ContainerButton>
        <ContainerButton>
          <SecondaryFormButton title='Sign Up' />
        </ContainerButton>
      </ContainerButtons>
    </Container>
  );
};

export default ForgotPassword;
