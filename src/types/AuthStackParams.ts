import { NavigationProp } from '@react-navigation/native';

export type AuthStackParamsList = {
  Login?: {};
  Register?: {};
  ForgotPassword?: {};
  NewPassword?: {};
};

export type LoginStackProps = {
  navigation: NavigationProp<AuthStackParamsList, 'Login'>;
};

export type RegisterStackProps = {
  navigation: NavigationProp<AuthStackParamsList, 'Register'>;
};

export type ForgotPasswordStackProps = {
  navigation: NavigationProp<AuthStackParamsList, 'ForgotPassword'>;
};

export type NewPasswordStackProps = {
  navigation: NavigationProp<AuthStackParamsList, 'NewPassword'>;
};
