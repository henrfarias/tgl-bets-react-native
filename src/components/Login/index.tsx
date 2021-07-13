import React, { useState, useContext } from 'react';
import { Container, Link, Text, ContainerButton } from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { axios } from '../../services/axios';
import { ISession } from '../../types/ISession';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/reducers/bearer.reducer';
import { isLoading, isntLoading } from '../../store/reducers/load.reducer';
import { IGame } from '../../types/IGames';
import { IUser } from '../../types/IUser';
import { userLoggedIn } from '../../store/reducers/user.reducer';
import { loadGames } from '../../store/reducers/games.reducer';
import { useToast } from 'react-native-styled-toast';

import Form from '../Form';
import Input from '../Input';
import FormButton from '../FormButton';
import SecondaryFormButton from '../SecondaryFormButton';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthScreen } = useContext(AuthContext);
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const fetchLogin = async () => {
    try {
      dispatch(isLoading());
      const response = await axios.post('/login', {
        email: email,
        password: password,
      });
      const { token }: ISession = response.data;
      const fetchGames = await axios.get('/games');
      const { data }: { data: IGame[] } = fetchGames.data;
      const getUser = await axios.get('/users', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const userInfo: IUser = getUser.data;

      dispatch(loadGames(data));
      dispatch(userLoggedIn(userInfo));
      dispatch(isntLoading());
      dispatch(login(token));
    } catch (error) {
      toast({ message: 'email ou senha inválido', intent: 'ERROR' })
      dispatch(isntLoading());
    }
  };

  return (
    <Container>
      <Form title='Authentication'>
        <Input
          label='Email'
          textContentType='emailAddress'
          keyboardType='email-address'
          onChangeText={setEmail}
          value={email} 
          filled={email}
        />
        <Input
          label='Password'
          textContentType='password'
          onChangeText={setPassword}
          value={password}
          filled={password}
          password
        />
        <Link onPress={() => setAuthScreen('PASSWORD')}>
          <Text>I forget my password</Text>
        </Link>
        <FormButton title='Log In' onPress={fetchLogin} />
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
