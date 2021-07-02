import { NavigationProp } from '@react-navigation/native';

export type AppTabsParamsList = {
  Home?: {};
  Game?: {};
  Account?: {};
};

export type HomeTabProp = {
  navigation: NavigationProp<AppTabsParamsList, 'Home'>;
};

export type GameTabProp = {
  navigation: NavigationProp<AppTabsParamsList, 'Game'>;
};

export type AccountTabProp = {
  navigation: NavigationProp<AppTabsParamsList, 'Account'>;
};