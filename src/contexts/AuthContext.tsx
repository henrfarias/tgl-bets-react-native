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
  bearer: string;
  setBearer: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<ICtxProps>({} as ICtxProps);

const AuthProvider: React.FC = ({ children }) => {
  const [bearer, setBearer] = useState('');
  const [loading, setLoading] = useState(false);
  const [authScreen, setAuthScreen] = useState<authTypes>('LOGIN');

  return (
    <AuthContext.Provider
      value={{
        authScreen,
        bearer,
        loading,
        setAuthScreen,
        setBearer,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
