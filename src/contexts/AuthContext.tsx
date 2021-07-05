import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

export type authTypes = 'LOGIN' | 'REGISTER' | 'PASSWORD';

interface ICtxProps {
  authScreen: authTypes;
  setAuthScreen: Dispatch<SetStateAction<authTypes>>;
}

const AuthContext = createContext<ICtxProps>({} as ICtxProps);

const AuthProvider: React.FC = ({ children }) => {
  const [authScreen, setAuthScreen] = useState<authTypes>('LOGIN');

  return (
    <AuthContext.Provider
      value={{
        authScreen,
        setAuthScreen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
