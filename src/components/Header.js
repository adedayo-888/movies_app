import * as React from 'react';
import { styled } from '@mui/material/styles';

import { Typography, Toolbar, Box } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';

const drawerWidth = 280;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar position='fixed'>
          <Toolbar sx={{ background: 'red', alignItems: 'center' }}>
            <Typography
              variant='h6'
              gutterBottom
              noWrap
              sx={{ cursor: 'pointer' }}
              onClick={() => window.scroll(0, 0)}
              component='div'>
              <strong>CloudFlix</strong>
              <br />
              <Typography gutterBottom variant='body2'>
                <b>Your Movie Search App</b>
              </Typography>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
