import React from 'react';
import { CircularProgress } from '@mui/material';
import BgImg from '../../../assets/img/intro-bg.svg'
import Logo from  '../../../assets/img/logo.png'
import { Box } from '@mui/system';
import './Intro.css'

const Intro = () => {
  return (
    <div id="Intro" style={{ backgroundImage: `url(${BgImg})` }}>
      <img src={Logo} alt="Logo" />
      <Box sx={{ display: 'flex', mt: '2rem' }}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Intro;