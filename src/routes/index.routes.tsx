import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from '../store/hooks';

import Auth from '../screens/Auth';
import AppTabs from './AppTabs/index.routes';

const Routes: React.FC = () => {
  const bearer = useAppSelector((state) => state.bearer);

  return (
    <NavigationContainer>
        { 
          bearer ? (
            <AppTabs />
          ) : (
            <Auth />
          )
        }
    </NavigationContainer>
  );
}
export default Routes;