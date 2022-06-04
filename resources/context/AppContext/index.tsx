import React, { createContext, useEffect, useState } from 'react';

export type AppContextType = {
  dialogCreateRoomVisible: boolean;
  dialogHelpVisible: boolean;
  setDialogCreateRoomVisible: (value: boolean) => void;
  setDialogHelpVisible: (value: boolean) => void;
};

interface IProviderProps {
  children?: React.ReactNode;
}

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider: React.FC<IProviderProps> = ({
  children,
}: IProviderProps) => {
  const [dialogCreateRoomVisible, setDialogCreateRoomVisible] = useState(false);
  const [dialogHelpVisible, setDialogHelpVisible] = useState(false);

  return (
    <AppContext.Provider
      value={{
        dialogCreateRoomVisible,
        setDialogCreateRoomVisible,
        dialogHelpVisible,
        setDialogHelpVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
