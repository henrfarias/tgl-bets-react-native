import React from 'react';
import { Container } from './styles'

import Form from '../Form';
import Input from '../Input';

const Login: React.FC = () => {
  return (
     <Container>
        <Form title='Authentication'>
          <Input label='Email' />
          <Input label='Password' />
        </Form>
     </Container>
  );
}

export default Login;