import React, { useContext } from 'react';
import { Container, ContainerButton } from './styles';
import { AuthScreenContext } from '../../contexts/AuthScreenContext';

import Form from '../Form';
import Input from '../Input';
import FormButton from '../FormButton';
import SecondaryFormButton from '../SecondaryFormButton';

const Register: React.FC = () => {
  const { setAuthScreen } = useContext(AuthScreenContext);
  return (
    <Container>
      <Form title='Registration'>
        <Input label='Name' />
        <Input label='Email' />
        <Input label='Password' />
        <FormButton title='Register' />
      </Form>
      <ContainerButton>
        <SecondaryFormButton
          title='Back'
          isBack
          onPress={() => setAuthScreen('LOGIN')}
        />
      </ContainerButton>
    </Container>
  );
};

export default Register;
