import { Button, Container, Grid } from '@mui/material';
import Overlay from '../../../assets/img/white-overlay.svg'
import React from 'react';
import profileBg from '../../../assets/img/profile-bg.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './Club.css'
import Navbar from '../../misc/Navbar/Navbar';
import useTitle from '../../../hooks/useTitle';

interface ClubProps {
  id: string
  logo: string
  name: string
  rrss: { twitter?: string, instagram?: string, facebook?: string, youtube?: string }
  address: string
  background: string
  goals: 20
  fouls: 10
  yellowCards: 3
  redCards: 2
  blueCards:0
}

const Club = () => {
  useTitle('Tu equipo')

  const clubProps: ClubProps = {
    id: "62197b86c887c7f4c55dd7cb",
    logo: "https://res.cloudinary.com/dwta0wgpp/image/upload/v1645824756/asobal/4.svg",
    name: "BIDASOA IRUN",
    rrss: {
      twitter: "https://twitter.com/CDBidasoaIrun",
      instagram: "https://www.instagram.com/cdbidasoairun/",
      facebook: "https://www.facebook.com/CDBidasoaIrun",
      youtube: "https://www.youtube.com/channel/UCAjgf3-GNDREkD0EeYRJF7Q"
    },
    address: "Artaleku",
    background: "#26387B",
    goals: 20,
    fouls: 10,
    yellowCards: 3,
    redCards: 2,
    blueCards:0
  };
  
  const { twitter, instagram, facebook, youtube } = clubProps.rrss;

  return (
    <div id="Club">
      <div className="bg-overlay-selector" style={{ backgroundImage: `url(${Overlay})`}}></div>
      <div className="profile-bg" style={{ backgroundImage: `url(${profileBg})`}}>
      <div className="profile-bg-color" style={{ backgroundColor: `${clubProps.background}` }}></div>
      <div className="logo-wrapper" style={{backgroundColor: `${clubProps.background}`}}>
        <div className='logo' style={{ backgroundImage: `url(${clubProps.logo})`}}></div>
      </div>
      </div>
      <div className="main-content">
        <Container maxWidth="sm">
          <h1 className="name">{clubProps.name}</h1>
          <p className='address'><b>Dirección:</b> {clubProps.address}</p>
        </Container>
      </div>
          <div className="icons-wrapper">
            {twitter && <a href={twitter} className="icon" target="blank"><TwitterIcon /></a>}
            {instagram && <a href={instagram} className="icon" target="blank"><InstagramIcon/></a>}
            {facebook && <a href={facebook} className="icon" target="blank"><FacebookIcon/></a>}
            {youtube && <a href={youtube} className="icon" target="blank"><YouTubeIcon/></a>}
          </div>
      <Navbar/>
    </div>
  );
};

export default Club;