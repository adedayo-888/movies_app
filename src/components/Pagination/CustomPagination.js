import React from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  type: 'dark',
  primary: {
    main: '#fff',
  },
});

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 10,
          color: 'white',
        }}>
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
      </div>
    </ThemeProvider>
  );
}
