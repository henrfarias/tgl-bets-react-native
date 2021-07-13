import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Form from '../../components/Form';
import { useAppSelector } from '../../store/hooks';
import Input from '../../components/Input';

const Account: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <>
      <Header />
      <Container>
        <Form title='Account'>
          <Input label='Email' />
        </Form>
      </Container>
    </>
  );
}

export default Account;