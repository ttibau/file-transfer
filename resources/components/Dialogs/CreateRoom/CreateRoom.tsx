import React, { useState, useContext } from 'react';
import { useDrag } from 'react-use-gesture';
import Dialog from '@components/Dialog';
import { TextField, Checkbox, Anchor, Button, Fieldset } from 'react95';
import * as Styled from './styles';
import {
  AppContext,
  AppContextType,
} from '@resources/context/AppContext/index';

const DialogContent = () => {
  const [roomPassword, setRoomPassword] = useState<string>('');
  const [agreed, setAgreed] = useState<boolean>(false);

  const _toggleAgreed = () => {
    setAgreed(!agreed);
  };
  return (
    <Fieldset label='Room info'>
      <TextField
        value={roomPassword}
        onChange={(e: any) => setRoomPassword(e.target.value)}
        placeholder='Room password'
        type='password'
        fullWidth
      />
      <Styled.DialogTermsContainer>
        <Checkbox
          checked={agreed}
          value='cheese'
          label='✅ I agree to the'
          name='ingredients'
          onClick={_toggleAgreed}
        />
        <Anchor href='https://expensive.toys' target='_blank'>
          {' '}
          Terms of Servicess
        </Anchor>
      </Styled.DialogTermsContainer>
      <Styled.ActionContainer>
        <Button>Create</Button>
      </Styled.ActionContainer>
    </Fieldset>
  );
};

interface IDialogCreatePosition {
  x: number;
  y: number;
}

const CreateRoomDialog = () => {
  const [dialogCreateRoomPosition, setDialogCreateRoomPosition] =
    useState<IDialogCreatePosition>({ x: 0, y: 0 });
  const bindDialogPosition = useDrag((params) => {
    setDialogCreateRoomPosition({
      y: params.offset[0],
      x: params.offset[1],
    });
  });
  const {
    setDialogCreateRoomVisible,
    setDialogHelpVisible,
    removeDialogOpened,
  } = useContext(AppContext) as AppContextType;

  const handleClose = () => {
    setDialogCreateRoomVisible(false);
    removeDialogOpened('create-room');
  };
  return (
    <div
      {...bindDialogPosition()}
      style={{
        position: 'relative',
        top: dialogCreateRoomPosition.x,
        left: dialogCreateRoomPosition.y,
      }}
    >
      <Dialog
        onClose={handleClose}
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
              handleClose();
            },
          },
          { label: 'Edit', variant: 'menu', size: 'sm', disabled: true },
        ]}
        content={<DialogContent />}
      />
    </div>
  );
};

export default CreateRoomDialog;
