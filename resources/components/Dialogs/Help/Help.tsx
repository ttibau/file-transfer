import React, { useState, useContext } from 'react';
import { useDrag } from 'react-use-gesture';
import Dialog from '@components/Dialog';
import { Anchor, Fieldset } from 'react95';
import {
  AppContext,
  AppContextType,
} from '@resources/context/AppContext/index';
import * as Styled from './styles';
import Image from 'next/image';
const DialogContent = () => {
  return (
    <Fieldset label='Help:'>
      <Styled.HelpContainer>
        <Image
          src='/imgs/file-transfer.gif'
          width={200}
          height={50}
          alt='file transfer'
        />
        <span>
          This is a software to help people to transfer files quickly and safe.
        </span>
        <span>
          Feel free to{' '}
          <Anchor href='https://expensive.toys' target='_blank'>
            contribute in our github repository
          </Anchor>
        </span>
      </Styled.HelpContainer>
    </Fieldset>
  );
};

interface IDialogPosition {
  x: number;
  y: number;
}

const HelpDialog = () => {
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
  const { removeDialogOpened } = useContext(AppContext) as AppContextType;

  const handleClose = () => {
    removeDialogOpened('help');
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
        onClose={handleClose}
        title='Help'
        buttonGroup={[
          {
            label: 'Close',
            variant: 'menu',
            size: 'sm',
            onClick: () => {
              handleClose();
            },
          },
        ]}
        content={<DialogContent />}
      />
    </div>
  );
};

export default HelpDialog;
