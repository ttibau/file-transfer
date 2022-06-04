import React, { createContext, useState } from 'react';

type IAppType = {
  dialogHelpVisible: boolean;
  dialogCreateRoomVisible: boolean;
};

type PropsAppContext = {
  state: IAppType;
  setState: React.Dispatch<React.SetStateAction<IAppType>>;
};

interface IProviderProps {
  children?: React.ReactNode;
}

const DEFAULT_VALUE = {
  state: {
    dialogCreateRoomVisible: false,
    dialogHelpVisible: false,
  },
  setState: () => {},
};

const AppContext = createContext<PropsAppContext>(DEFAULT_VALUE);

const AppContextProvider: React.FC<IProviderProps> = ({
  children,
}: IProviderProps) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };
export default AppContext;
