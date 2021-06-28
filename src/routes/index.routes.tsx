import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack/index.routes';
import AppTabs from './AppTabs/index.routes';

const Routes: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {loggedIn ? (
        <AppTabs />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
export default Routes;