import React, { useContext, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import PolicyIcon from '@mui/icons-material/Policy';

import { useNavigate } from 'react-router-dom';
import theme from '../../../theme';
import { TitleContext } from '../../../contexts/TitleProvider';

const TopNavbar = () => {
  const navigate = useNavigate();
  const { title } = useContext(TitleContext)

  const handleNavBack = () => {
    navigate(-1);
  }
  const handleChangeClub = () => {
    console.log('change club');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary" enableColorOnDark style={{ backgroundColor: theme.palette.backgroundColor.main, backgroundImage: 'none', boxShadow: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleNavBack}
          >
            <ArrowBackIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            {title}
          </Typography>

          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={handleChangeClub}
          >
            <PolicyIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNavbar;