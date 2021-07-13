import React, { useState } from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Form from '../../components/Form';
import { useAppSelector } from '../../store/hooks';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';
import { axios } from '../../services/axios';
import { useToast } from 'react-native-styled-toast';

const Account: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const user = useAppSelector((state) => state.user);
  const bearer = useAppSelector((state) => state.bearer);
  const { toast } = useToast();

  const updateUserHandler = async () => {
    try {
      if (!email && !username) {
        return;
      }
      if (email && !email.match(/^[A-Za-z][\w.\d]+@\w+\.\w{2,3}(?:\.\w{2})?$/g)) {
        toast({
          message: 'Digite um email válido para substituir o anterior.',
          intent: 'ERROR',
        });
        return;
      }
      await axios.put(
        `/users/${user.id}`,
        {
          username: username ? username : user.username,
          email: email ? email : user.email,
        },
        {
          headers: { Authorization: `Bearer ${bearer}` },
        }
      );
      setUsername('');
      setEmail('');
      toast({ message: 'Cadastro atualizado.' });
    } catch (error) {
      toast({
        message: 'Algo deu errado na sua solicitação =(',
        intent: 'ERROR',
      });
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Form title='Account'>
          <Input
            label='Username'
            onChangeText={setUsername}
            value={username}
            filled={username}
          />
          <Input
            label='Email'
            textContentType='emailAddress'
            keyboardType='email-address'
            onChangeText={setEmail}
            value={email}
            filled={email}
          />
          <FormButton title='Update' onPress={updateUserHandler} />
        </Form>
      </Container>
    </>
  );
};

export default Account;
