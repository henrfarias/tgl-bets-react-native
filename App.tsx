import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic
} from '@expo-google-fonts/roboto';

import store from './src/store';
import { AuthProvider } from './src/contexts/AuthContext';
import { Provider } from 'react-redux';
import Routes from './src/routes/index.routes';


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

  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
};

export default App;
