import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic
} from '@expo-google-fonts/roboto';

import Routes from './src/routes/index.routes';
import Auth from './src/screens/Auth';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <Auth />;
};

export default App;
