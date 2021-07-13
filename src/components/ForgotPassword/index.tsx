import React, { useContext, useState } from 'react';
import { Container, ContainerButton, ContainerButtons } from './styles';

import Form from '../Form';
import Input from '../Input';
import FormButton from '../FormButton';
import SecondaryFormButton from '../SecondaryFormButton';
import { AuthContext } from '../../contexts/AuthContext';
import { axios } from '../../services/axios';
import { useToast } from 'react-native-styled-toast';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const { setAuthScreen } = useContext(AuthContext);
  const { toast } = useToast();

  const forgotPasswordHandler = async () => {
    try {
      if(!email.match(/^[A-Za-z][\w.\d]+@\w+\.\w{2,3}(?:\.\w{2})?$/g)) {
        toast({ message: 'Email inválido.', intent: 'ERROR'});
        return;
      }
      await axios.post('/forgot-password', {
        email,
      });
      toast({
        message:
          'Acabamos de enviar um email para você com o token para renovar sua senha.',
        intent: 'SUCCESS',
      });
    } catch (error) {
      toast({
        message: 'Algo deu errado na sua solicitação. =(',
        intent: 'ERROR',
      });
    }
  };

  return (
    <Container>
      <Form title='Reset password'>
        <Input
          label='Email'
          value={email}
          onChangeText={setEmail}
          filled={email}
        />
        <FormButton title='Send Link' onPress={forgotPasswordHandler} />
      </Form>
      <ContainerButtons>
        <ContainerButton>
          <SecondaryFormButton
            title='Back'
            isBack
            onPress={() => setAuthScreen('LOGIN')}
          />
        </ContainerButton>
        <ContainerButton>
          <SecondaryFormButton
            title='Sign Up'
            onPress={() => setAuthScreen('REGISTER')}
          />
        </ContainerButton>
      </ContainerButtons>
    </Container>
  );
};

export default ForgotPassword;
