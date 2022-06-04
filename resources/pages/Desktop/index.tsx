import React, { useContext } from 'react';
import { AppBarComponent } from '@components/AppBar';
import DesktopItem from '@components/DesktopItem';
import * as Styled from './styles';
import {
  AppContext,
  AppContextType,
} from '@resources/context/AppContext/index';
import CreateRoomDialog from '@components/Dialogs/CreateRoom/CreateRoom';

const Desktop = () => {
  const { dialogCreateRoomVisible, setDialogCreateRoomVisible } = useContext(
    AppContext
  ) as AppContextType;

  return (
    <Styled.Container>
      <nav>
        <AppBarComponent />
      </nav>
      <main style={{ paddingTop: '5rem' }}>
        <DesktopItem
          icon='Mshtml32528_48x48_8'
          label='Create new room'
          onClick={() => {
            setDialogCreateRoomVisible(true);
          }}
        />
        {dialogCreateRoomVisible && <CreateRoomDialog />}
      </main>
    </Styled.Container>
  );
};

export default Desktop;
