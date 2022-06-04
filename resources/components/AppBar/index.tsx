import React, { useContext, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
  Divider,
} from 'react95';
import Image from 'next/image';
import * as Styled from './styles';
import {
  AppContext,
  AppContextType,
} from '@resources/context/AppContext/index';

export const AppBarComponent = () => {
  const [open, setOpen] = React.useState(false);
  const { openedDialogs } = useContext(AppContext) as AppContextType;

  return (
    <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Styled.ButtonsContainer>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: 'bold' }}
            >
              <Image
                src='/imgs/logo.png'
                alt='react95 logo'
                height={20}
                width={20}
              />
              Start
            </Button>
            {open && (
              <List
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '100%',
                }}
                onClick={() => setOpen(false)}
              >
                <ListItem>
                  <span role='img' aria-label='👨‍💻'>
                    👨‍💻
                  </span>
                  Profile
                </ListItem>
                <ListItem>
                  <span role='img' aria-label='📁'>
                    📁
                  </span>
                  My account
                </ListItem>
                <Divider />
                <ListItem disabled>
                  <span role='img' aria-label='🔙'>
                    🔙
                  </span>
                  Logout
                </ListItem>
              </List>
            )}
          </div>
          {openedDialogs.length > 0 &&
            openedDialogs.map(({ label, key }) => (
              <Styled.OpenedButton key={key} active>
                {label}
              </Styled.OpenedButton>
            ))}
        </Styled.ButtonsContainer>
        <TextField placeholder='Search...' width={150} />
      </Toolbar>
    </AppBar>
  );
};
