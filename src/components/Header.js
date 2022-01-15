import * as React from 'react';
import { AppBar, Typography, Toolbar, Box } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
const Header = () => {
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar
          sx={{
            background: 'red',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontWeight: 'bold',
            justifyContent: 'space-between',
            height: '90px',
            padding: '0 20px',
          }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PreviewIcon
              sx={{
                fontSize: '2.5rem',
                alignItems: 'center',
                color: 'yellow',
                marginRight: '5px',
              }}
            />
            <Typography
              variant='h4'
              gutterBottom
              noWrap
              sx={{
                cursor: 'pointer',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'yellow',
              }}
              onClick={() => window.scroll(0, 0)}
              component='div'>
              CloudFlix
            </Typography>
          </Box>
          <Box>
            <Typography
              variant='h6'
              sx={{ cursor: 'pointer', color: 'yellow' }}
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
