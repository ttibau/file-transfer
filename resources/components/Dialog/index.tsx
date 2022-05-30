import React from 'react';
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
} from 'react95';
import * as Styled from './styles';
import { useDrag } from 'react-dnd';

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
  const [{ isDragging }, dragRef] = useDrag({
    type: 'dialog',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <Styled.Container ref={dragRef}>
      <Window className='window'>
        <WindowHeader className='window-header'>
          <span>
            {props.title} {isDragging && '😱'}{' '}
          </span>
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
