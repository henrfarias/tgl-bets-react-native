import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppTabsParamsList } from '../../types/AppTabsParams';

import Home from '../../screens/Home';
import Game from '../../screens/Game';

const { Navigator, Screen } = createBottomTabNavigator<AppTabsParamsList>();

const AppTabs: React.FC = () => {
  return (
    <Navigator>
      <Screen 
        name='Home'
        component={Home}
      />
      <Screen
        name='Game'
        component={Game}
      />
    </Navigator>
  );
}

export default AppTabs;