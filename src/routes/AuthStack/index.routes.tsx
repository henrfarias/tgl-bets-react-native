import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamsList } from '../../types/AuthStackParams';

import Auth from '../../screens/Auth';
import Register from '../../screens/Register';
import ResetPassword from '../../screens/ResetPassword';
import NewPassword from '../../screens/NewPassword';

const { Navigator, Screen } = createStackNavigator<AuthStackParamsList>();

const AuthStack: React.FC = () => {
  return (
    <Navigator>
      <Screen 
        name='Login'
        component={Auth}
      />
      <Screen
        name='Register'
        component={Register}
      />
      <Screen 
        name='ForgotPassword'
        component={ResetPassword}
      />
      <Screen
        name='NewPassword'
        component={NewPassword}
      />
    </Navigator>
  );
}

export default AuthStack;