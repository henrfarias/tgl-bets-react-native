import React, { useState, useContext } from 'react';
import { Container, ContainerButton } from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { useToast } from 'react-native-styled-toast';

import Form from '../Form';
import Input from '../Input';
import FormButton from '../FormButton';
import SecondaryFormButton from '../SecondaryFormButton';
import { axios } from '../../services/axios';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const { setAuthScreen } = useContext(AuthContext);

  const registerHandler = async () => {
    if (password.trim().length < 6) {
      console.log('error', 'Sua senha precisa ter 6 ou mais caracteres.');
      return;
    } else if (
      username.trim() === '' ||
      !email.match(/^[A-Za-z][\w.\d]+@\w+\.\w{2,3}(?:\.\w{2})?$/g)
    ) {
      console.log('error', 'Insira um email válido.');
      return;
    }

    try {
      await axios.post('/register', {
        username,
        email,
        password,
      });
      toast({ message: 'cadastrado com sucesso.' });
      setAuthScreen('LOGIN');
    } catch (error) {
      toast({
        message: 'Algo deu errado ao cadastrar este usuário.',
        intent: 'ERROR',
      });
    }
  };

  return (
    <Container>
      <Form title='Registration'>
        <Input
          label='Name'
          onChangeText={setUsername}
          value={username}
          filled={username}
        />
        <Input
          label='Email'
          keyboardType='email-address'
          onChangeText={setEmail}
          value={email}
          filled={email}
        />
        <Input
          label='Password'
          onChangeText={setPassword}
          value={password}
          filled={password}
          password
        />
        <FormButton title='Register' onPress={registerHandler} />
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
