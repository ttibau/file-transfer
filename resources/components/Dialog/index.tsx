import React from 'react';
import { Window, WindowContent, WindowHeader, Button, Toolbar } from 'react95';
import * as Styled from './styles';

interface IButtonHeader {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  variant?: any;
}

interface DialogProps {
  isDragging?: boolean;
  title: string;
  buttonGroup: IButtonHeader[];
  content: React.ReactNode;
  footer?: React.ReactNode;
}

const Dialog = (props: DialogProps) => {
  return (
    <Styled.Container>
      <Window className='window'>
        <WindowHeader className='window-header'>
          <span>{props.title}</span>
          <Button>
            <span className='close-icon' />
          </Button>
        </WindowHeader>
        <Toolbar>
          {props.buttonGroup.map((button, index) => (
            <Button
              key={index}
              size={button.size}
              disabled={button.disabled}
              onClick={button.onClick}
              variant={button.variant}
            >
              {button.label}
            </Button>
          ))}
        </Toolbar>
        <WindowContent>{props.content}</WindowContent>
        {props.footer}
      </Window>
    </Styled.Container>
  );
};

export default Dialog;
