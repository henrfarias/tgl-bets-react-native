import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppTabsParamsList } from '../../types/AppTabsParams';
import { ButtonContainer, MainButton } from './styles';

import LogoSvg from '../../assets/icon.svg';
import Home from '../../screens/Home';
import Game from '../../screens/Game';
import { theme } from '../../global/theme';
import Account from '../../screens/Account';
import TabButton from '../../components/TabButton';

const { Navigator, Screen } = createBottomTabNavigator<AppTabsParamsList>();

const AppTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        showLabel: false,
        style: {
          position: 'absolute',
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          height: 71.81,
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        },
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabButton
              iconName='home-outline'
              label='Home'
              color={color}
              focused={focused}
            />
          ),
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
                <LogoSvg style={{ borderRadius: 100, elevation: 10 }} />
              </MainButton>
            </ButtonContainer>
          ),
        }}
      />
      <Screen
        name='Account'
        component={Account}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabButton
              iconName='person-outline'
              label='Account'
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppTabs;
