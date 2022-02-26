import { Button, Container, Grid } from '@mui/material';
import Overlay from '../../../assets/img/white-overlay.svg'
import React from 'react';

import './Club.css'

const Club = () => {
  return (
    <div id="Club">
      <div className="bg-overlay-selector" style={{ backgroundImage: `url(${Overlay})`}}></div>
      <div className="main-content">
        <Container maxWidth="sm">
          <div className="main-container">
            
            <Grid container spacing={2} sx={{ mt: "1rem"}}>
              {
                Array(15).fill(0).map((club, index) => {
                  return (
                    <Grid key={index} item xs={4} sx={{ mb: '1.5rem'}}>
                      <div className="clubItem">
                        <img src="https://res.cloudinary.com/dwta0wgpp/image/upload/v1645824762/asobal/14.svg"></img>
                      </div>
                    </Grid>
                  )
                })
              }
            </Grid>
              <Button
                sx={{ mt: '3rem', py: "0.75rem", mb:'3rem' }}
                fullWidth
                variant="contained"
                size="large"
                type="submit"
              >
                Continuar
              </Button>
          </div>

        </Container>
      </div>
    </div>
  );
};

export default Club;