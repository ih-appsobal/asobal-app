import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import DateRangeIcon from '@mui/icons-material/DateRange';

const Navbar = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="News" icon={<NewspaperIcon />} />
        <BottomNavigationAction label="Jornada" icon={<DateRangeIcon />} />
        <BottomNavigationAction label="Club" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="Mensajes" icon={<CircleNotificationsIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default Navbar;