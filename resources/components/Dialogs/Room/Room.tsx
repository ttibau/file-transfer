import React, { useContext, useState } from 'react';
import { useDrag } from 'react-use-gesture';
import Dialog from '@components/Dialog';
import { AppContextType, AppContext } from '@resources/context/AppContext';
import { Fieldset, Tooltip } from 'react95';
import * as Styled from './styles';
import FilesTable from '@components/FilesTable/FilesTable';

// https://coins95.web.app/coins
const DialogContent = () => {
  return (
    <div>
      <Fieldset label='Room info'>
        <Styled.RoomInfo>
          <Styled.RoomInfoRow>
            <Styled.RoomInfoLabel>Room id:</Styled.RoomInfoLabel>
            <Styled.RoomInfoValue>
              c2039f26-e255-4d16-b6f6-7a936da8cb25
            </Styled.RoomInfoValue>
          </Styled.RoomInfoRow>
          <Styled.RoomInfoRow>
            <Styled.RoomInfoLabel>Expiration:</Styled.RoomInfoLabel>
            <Styled.RoomInfoValue>06/12/2022 12:00:00 AM</Styled.RoomInfoValue>
          </Styled.RoomInfoRow>
          <Styled.RoomInfoRow>
            <Styled.RoomInfoLabel>Room URL:</Styled.RoomInfoLabel>
            <Styled.RoomInfoValue>
              <Tooltip text='Click to copy' enterDelay={100} leaveDelay={100}>
                <Styled.RoomButtonIcon>📋</Styled.RoomButtonIcon>
              </Tooltip>
            </Styled.RoomInfoValue>
            <Styled.RoomInfoLabel ml>Room Password:</Styled.RoomInfoLabel>
            <Styled.RoomInfoValue>
              <Tooltip
                text='Click to show the room password'
                enterDelay={100}
                leaveDelay={100}
              >
                <Styled.RoomButtonIcon>👁️</Styled.RoomButtonIcon>
              </Tooltip>
            </Styled.RoomInfoValue>
          </Styled.RoomInfoRow>
        </Styled.RoomInfo>
      </Fieldset>
      <Styled.UploadFileSection label='Upload File'>
        <Styled.DropFilesLabel>
          Drop files here or click to upload
        </Styled.DropFilesLabel>
      </Styled.UploadFileSection>
      <Styled.TableContent>
        <FilesTable />
      </Styled.TableContent>
    </div>
  );
};

interface IDialogPosition {
  x: number;
  y: number;
}

const RoomDialog = () => {
  const [dialogPosition, setDialogPosition] = useState<IDialogPosition>({
    x: 0,
    y: 0,
  });
  const bindDialogPosition = useDrag((params) => {
    setDialogPosition({
      y: params.offset[0],
      x: params.offset[1],
    });
  });

  const { removeDialogOpened, openDialog } = useContext(
    AppContext
  ) as AppContextType;

  const handleClose = () => {
    removeDialogOpened('room-info');
  };

  return (
    <div
      {...bindDialogPosition()}
      style={{
        position: 'relative',
        top: dialogPosition.x,
        left: dialogPosition.y,
      }}
    >
      <Dialog
        size='md'
        title='Room'
        buttonGroup={[
          {
            label: 'Close',
            variant: 'menu',
            size: 'sm',
            onClick: () => {
              handleClose();
            },
          },
          {
            label: 'Help',
            variant: 'menu',
            size: 'sm',
            onClick: () => {
              openDialog('help', 'Help');
            },
          },
        ]}
        content={<DialogContent />}
      />
    </div>
  );
};

export default RoomDialog;
