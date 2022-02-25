import React, { useState, useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Navbar = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents" icon={<AccessAlarmIcon />} />
      <BottomNavigationAction label="Favorites" icon={<AccessAlarmIcon />} />
      <BottomNavigationAction label="Nearby" icon={<AccessAlarmIcon />} />
    </BottomNavigation>
  );
};

export default Navbar;