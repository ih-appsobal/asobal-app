import { Button, CircularProgress, Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Overlay from '../../../assets/img/white-overlay.svg'
import { Club, list } from '../../../services/ClubService';
import { setClub } from '../../../services/UserService';
import LoaderModal from '../../misc/LoaderModal/LoaderModal';
import './ClubSelector.css'

const ClubSelector = () => {
  const [clubs, setClubs] = useState<Club[]>([])
  const [loading, setLoading] = useState(true)
  const [currentClub, setCurrentClub] = useState<Club | null>(null)
  let navigate = useNavigate();

  const fetchClubs = async () => {
    try {
      const response = await list()
      setLoading(false)
      setClubs(response)
    } catch(err) {
      console.error(err);
    }
  };

  const handleSubmit = async() => {
    if (currentClub) {
      try {
        await setClub(currentClub.id)
        navigate('/')
      } catch(err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    fetchClubs()
  }, [])

  return (
    <div id="ClubSelector" >
      <div className="bg-overlay-selector" style={{ backgroundImage: `url(${Overlay})`}}></div>
      <div className="main-content" style={{ backgroundColor: `${currentClub ? currentClub.background + '80' : ''}`}}>
        <Container maxWidth="sm">
          <div className="main-container">
            {
              !loading
              ? (
                <div>
                  <h1>Selecciona un equipo</h1>
                  <Grid container spacing={2} sx={{ mt: "1rem"}}>
                    {
                      clubs.map((club, index) => {
                        return (
                          <Grid key={index} item xs={4} sx={{ mb: '1.5rem'}}>
                            <div className={`clubItem ${currentClub?.id === club.id ? 'selected' : ''}`}onClick={() => setCurrentClub(club)}>
                              <img src={club.logo}></img>
                            </div>
                          </Grid>
                        )
                      })
                    }
                  </Grid>
                    <Button
                      onClick={handleSubmit}
                      disabled={currentClub?.id ? false : true}
                      sx={{ mt: '3rem', py: "0.75rem", mb:'3rem' }}
                      fullWidth
                      variant="contained"
                      size="large"
                      type="submit"
                      color="secondary"
                    >
                      Continuar
                    </Button>
                </div>
              )
              : <LoaderModal/>
            }
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ClubSelector;