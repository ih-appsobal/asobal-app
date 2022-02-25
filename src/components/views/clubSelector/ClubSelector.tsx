import { Button, Container, Grid } from '@mui/material';
import BgImg from '../../../assets/img/intro-bg.svg'
import React from 'react';
import './ClubSelector.css'

const ClubSelector = () => {
  return (
    <div id="ClubSelector">
      <div className="main-content">
        <Container maxWidth="sm">
          <h1>Selecciona un equipo</h1>
          <p>Esta información nos servirá para ofrecerte el mejor contenido para ti</p>
          <Grid container spacing={2}>
            {
              Array(15).fill(0).map((club, index) => {
                return (
                  <Grid key={index} item xs={4}>
                    <div className="clubItem">
                      <img src="https://res.cloudinary.com/dwta0wgpp/image/upload/v1645824762/asobal/14.svg"></img>
                    </div>
                  </Grid>

                )
              })
            }
          </Grid>
            <Button
              sx={{ mt: '3rem', py: "0.75rem", mb:'2rem' }}
              fullWidth
              variant="contained"
              size="large"
              type="submit"
            >
              Continuar
            </Button>
        </Container>
      </div>
    </div>
  );
};

export default ClubSelector;