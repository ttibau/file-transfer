import { AppBarComponent } from '@components/AppBar';
import DesktopItem from '@components/DesktopItem';
import Dialog from '@components/Dialog';
import React, { useState } from 'react';
import * as Styled from './styles';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TextField, Checkbox, Anchor, Button, Fieldset } from 'react95';

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
          Terms of Service
        </Anchor>
      </Styled.DialogTermsContainer>
      <Styled.ActionContainer>
        <Button>Create</Button>
      </Styled.ActionContainer>
    </Fieldset>
  );
};

const Desktop = () => {
  return (
    <Styled.Container>
      <nav>
        <AppBarComponent />
      </nav>
      <main style={{ paddingTop: '5rem' }}>
        <DndProvider backend={HTML5Backend}>
          <DesktopItem icon='Mshtml32528_48x48_8' label='Create new room' />
          <Dialog
            title='Create new room'
            buttonGroup={[
              { label: 'Close', variant: 'menu', size: 'sm' },
              { label: 'Edit', variant: 'menu', size: 'sm', disabled: true },
            ]}
            content={CreateRoomContent()}
          />
        </DndProvider>
      </main>
    </Styled.Container>
  );
};

export default Desktop;
