import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
} from '@expo-google-fonts/roboto';

import store from './src/store';
import { AuthProvider } from './src/contexts/AuthContext';
import { Provider } from 'react-redux';
import Routes from './src/routes/index.routes';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from 'react-native-styled-toast';
import { theme } from './src/global/theme';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastProvider maxToasts={2}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
