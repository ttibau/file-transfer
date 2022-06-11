import React, { createContext, useEffect, useState } from 'react';

interface IOpenedDialogInfo {
  label: string;
  key: string;
}

export type AppContextType = {
  openedDialogs: IOpenedDialogInfo[];
  removeDialogOpened: (key: string) => void;
  openDialog: (key: string, label: string) => void;
};

interface IProviderProps {
  children?: React.ReactNode;
}

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider: React.FC<IProviderProps> = ({
  children,
}: IProviderProps) => {
  const [openedDialogs, setOpenedDialogs] = useState<IOpenedDialogInfo[]>([]);

  const literalDialogKeys = {
    ['dialogCreateRoomVisible']: {
      label: 'Create room',
      key: 'create-room',
    },
    ['room-info']: {
      label: 'Room info',
      key: 'room-info',
    },
    ['help']: {
      label: 'Help',
      key: 'help',
    },
  };

  // Exportar esse método do context e matar o useEffect
  const openDialog = (key: string, label: string) => {
    const newOpenedDialogs = [...openedDialogs];
    const index = newOpenedDialogs.findIndex((item) => item.key === key);
    if (index === -1) {
      newOpenedDialogs.push({ key, label });
    }
    setOpenedDialogs(newOpenedDialogs);
  };

  const removeDialogOpened = (key: string) => {
    const newOpenedDialogs = [...openedDialogs];
    const index = newOpenedDialogs.findIndex((item) => item.key === key);
    if (index !== -1) {
      newOpenedDialogs.splice(index, 1);
    }
    setOpenedDialogs(newOpenedDialogs);
  };

  return (
    <AppContext.Provider
      value={{
        openedDialogs,
        removeDialogOpened,
        openDialog,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
