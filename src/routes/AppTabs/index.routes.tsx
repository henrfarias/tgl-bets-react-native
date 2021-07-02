import React from 'react';
import { createBottomTabNavigator, BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { AppTabsParamsList } from '../../types/AppTabsParams';
import { Ionicons } from '@expo/vector-icons';
import { ButtonContainer, MainButton } from './styles';

import LogoSvg from '../../assets/icon.svg';
import Home from '../../screens/Home';
import Game from '../../screens/Game';
import { theme } from '../../global/theme';
import Account from '../../screens/Account';

const { Navigator, Screen } = createBottomTabNavigator<AppTabsParamsList>();

const AppTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        labelStyle: {
          paddingBottom: 13,
          fontFamily: theme.tipography.Itext,
          fontSize: 14,
        },
        style: {
          position: 'absolute',
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        },
        tabStyle: {
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        },
      }}
    >
      <Screen
        options={{
          tabBarIcon: () => <Ionicons name='home-outline' size={24} />,
        }}
        name='Home'
        component={Home}
      />
      <Screen
        name='Game'
        component={Game}
        options={{
          tabBarLabel: '',
          tabBarButton: (props) => (
            <ButtonContainer>
              <MainButton {...props}>
                <LogoSvg />
              </MainButton>
            </ButtonContainer>
          ),
        }}
      />
      <Screen name='Account' component={Account} />
    </Navigator>
  );
};

export default AppTabs;
