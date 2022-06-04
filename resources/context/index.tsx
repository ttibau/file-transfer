import React from 'react';

import { AppContextProvider } from '@resources/context/AppContext';

interface IContextProps {
  children?: React.ReactNode;
}

const GlobalContext: React.FC<IContextProps> = (props: IContextProps) => {
  return <AppContextProvider>{props.children}</AppContextProvider>;
};

export default GlobalContext;
