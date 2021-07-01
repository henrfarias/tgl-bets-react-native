import React, { useState, createContext, Dispatch, SetStateAction } from 'react';

export type authTypes = 'LOGIN' | 'REGISTER' | 'PASSWORD';

interface ICtxProps {
  authScreen: authTypes,
  setAuthScreen: Dispatch<SetStateAction<authTypes>>
}


const AuthScreenContext = createContext<ICtxProps>({} as ICtxProps);


const AuthScreenProvider: React.FC = ({ children }) => {
  const [authScreen, setAuthScreen] = useState<authTypes>('LOGIN')

  return (
    <AuthScreenContext.Provider value={{authScreen, setAuthScreen}}>
      {children}
    </AuthScreenContext.Provider>
  );
}

export { AuthScreenContext, AuthScreenProvider}