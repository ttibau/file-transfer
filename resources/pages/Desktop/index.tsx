import React, { useContext } from 'react';
import { AppBarComponent } from '@components/AppBar';
import DesktopItem from '@components/DesktopItem';
import * as Styled from './styles';
import {
  AppContext,
  AppContextType,
} from '@resources/context/AppContext/index';
import CreateRoomDialog from '@components/Dialogs/CreateRoom/CreateRoom';
import HelpDialog from '@components/Dialogs/Help/Help';
import RoomDialog from '@components/Dialogs/Room/Room';

const Desktop = () => {
  const { openDialog, openedDialogs } = useContext(
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
            openDialog('create-room', 'Create new room');
          }}
        />
        {openedDialogs.some((dialog) => dialog.key === 'create-room') && (
          <CreateRoomDialog />
        )}
        {openedDialogs.some((dialog) => dialog.key === 'help') && (
          <HelpDialog />
        )}
        {/* {openedDialogs.some((dialog) => dialog.key === 'room-info') && ( */}
        <RoomDialog />
        {/* )} */}
      </main>
    </Styled.Container>
  );
};

export default Desktop;
