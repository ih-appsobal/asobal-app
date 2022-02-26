import React, { useState, useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import EmojiEvents from '@mui/icons-material/EmojiEvents';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [value, setValue] = useState(0);

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/app':
        setValue(0)
        break;
      case '/app/partidos':
        setValue(1)
        break;
      case '/app/equipo':
        setValue(2)
        break;
      case '/app/notificaciones':
        setValue(3)
        break;
    }
  }, [location.pathname])

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:2 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={() => navigate('/app')}label="Noticias" icon={<NewspaperIcon />} />
        <BottomNavigationAction onClick={() => navigate('/app/partidos')} label="Partidos" icon={<EmojiEvents />} />
        <BottomNavigationAction onClick={() => navigate('/app/equipo')} label="Club" icon={<AccountCircleIcon />} />
        <BottomNavigationAction onClick={() => navigate('/app/notificaciones')} label="Mensajes" icon={<CircleNotificationsIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default Navbar;