import React, { useContext, useState } from 'react';
import { useDrag } from 'react-use-gesture';
import Dialog from '@components/Dialog';
import { AppContextType, AppContext } from '@resources/context/AppContext';

const RoomDialog = () => {
  return (
    <div>
      <h1>RoomDialog</h1>
    </div>
  );
};

interface IDialogPosition {
  x: number;
  y: number;
}

const DialogContent = () => {
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
        title='Create new room'
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
