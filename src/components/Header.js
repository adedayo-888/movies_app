import * as React from 'react';
import { AppBar, Typography, Toolbar, Box } from '@mui/material';

const Header = () => {
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar
          sx={{
            background: 'red',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            justifyContent: 'space-between',
            height: '90px',
            padding: '0 20px',
          }}>
          <Box>
            <Typography
              variant='h4'
              gutterBottom
              noWrap
              sx={{ cursor: 'pointer' }}
              onClick={() => window.scroll(0, 0)}
              component='div'>
              CloudFlix
            </Typography>
          </Box>
          <Box>
            <Typography
              variant='h6'
              sx={{ cursor: 'pointer' }}
              onClick={() => window.scroll(0, 0)}
              component='div'>
              <b>Your Movie/TV Search App</b>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </>
  );
};

export default Header;
