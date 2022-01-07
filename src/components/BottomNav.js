import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TheatersIcon from '@mui/icons-material/Theaters';
import TvIcon from '@mui/icons-material/Tv';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'red',
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate('/trends');
    } else if (value === 1) {
      navigate('/movies');
    } else if (value === 2) {
      navigate('/series');
    } else if (value === 3) {
      navigate('/search');
    }
  }, [value, navigate]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      <BottomNavigationAction
        style={{ color: 'white' }}
        label='Trends'
        icon={<TrendingUpIcon />}
      />
      <BottomNavigationAction
        style={{ color: 'white' }}
        label='Movies'
        icon={<TheatersIcon />}
      />
      <BottomNavigationAction
        style={{ color: 'white' }}
        label='TV Series'
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: 'white' }}
        label='Search'
        icon={<ManageSearchIcon />}
      />
    </BottomNavigation>
  );
}
