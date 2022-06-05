import React, { createContext, useEffect, useState } from 'react';

interface IOpenedDialogInfo {
  label: string;
  key: string;
}

export type AppContextType = {
  dialogCreateRoomVisible: boolean;
  dialogHelpVisible: boolean;
  setDialogCreateRoomVisible: (value: boolean) => void;
  setDialogHelpVisible: (value: boolean) => void;
  openedDialogs: IOpenedDialogInfo[];
  removeDialogOpened: (key: string) => void;
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

  useEffect(() => {
    if (dialogCreateRoomVisible) {
      handleOpenedDialog('create-room', 'Create new room');
    } else if (dialogHelpVisible) {
      handleOpenedDialog('help', 'Help');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialogCreateRoomVisible, dialogHelpVisible]);

  const handleOpenedDialog = (key: string, label: string) => {
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
        dialogCreateRoomVisible,
        setDialogCreateRoomVisible,
        dialogHelpVisible,
        setDialogHelpVisible,
        openedDialogs,
        removeDialogOpened,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
