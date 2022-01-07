import React from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
  // '& .MuiTouchRipple-root': {
  //   color: 'white',
  // },
});

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
        color: 'white',
      }}>
      <ThemeProvider theme={darkTheme}>
        <Pagination
          variant='outlined'
          shape='rounded'
          size='large'
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color='secondary'
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}
