import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppTabs from './AppTabs/index.routes';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
        <AppTabs />
    </NavigationContainer>
  );
}
export default Routes;