import { AppBarComponent } from '@components/AppBar';
import DesktopItem from '@components/DesktopItem';
import Dialog from '@components/Dialog';
import React, { useState } from 'react';
import * as Styled from './styles';
import { TextField, Checkbox, Anchor, Button, Fieldset } from 'react95';
import { useDrag } from 'react-use-gesture';

interface IDialogCreatePosition {
  x: number;
  y: number;
}

const CreateRoomContent = () => {
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

const Desktop = () => {
  const [dialogCreateRoomPosition, setDialogCreateRoomPosition] =
    useState<IDialogCreatePosition>({ x: 0, y: 0 });
  const bindDialogPosition = useDrag((params) => {
    setDialogCreateRoomPosition({
      y: params.offset[0],
      x: params.offset[1],
    });
  });

  return (
    <Styled.Container>
      <nav>
        <AppBarComponent />
      </nav>
      <main style={{ paddingTop: '5rem' }}>
        <DesktopItem icon='Mshtml32528_48x48_8' label='Create new room' />
        <div
          {...bindDialogPosition()}
          style={{
            position: 'relative',
            top: dialogCreateRoomPosition.x,
            left: dialogCreateRoomPosition.y,
          }}
        >
          <Dialog
            title='Create new room'
            buttonGroup={[
              { label: 'Close', variant: 'menu', size: 'sm' },
              { label: 'Edit', variant: 'menu', size: 'sm', disabled: true },
            ]}
            content={CreateRoomContent()}
          />
        </div>
      </main>
    </Styled.Container>
  );
};

export default Desktop;
