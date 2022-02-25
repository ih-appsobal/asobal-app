import React from 'react';
import { Button, Container, TextField, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Logo from  '../../../assets/img/logo.png'
import './Register.css'
import { countries } from '../../../constants';

const Register = () => {
  const [country, setCountry] = React.useState("");

  const handleChange = (event: any) => {
    setCountry(event.target.value);
  };

  return (
    <div id="Register">
      <Container maxWidth="sm">
        <img src={ Logo } alt="Logo de la app"></img>
        <form>
          <TextField sx={{ mt: '1rem' }} fullWidth id="outlined-basic" label="Nombre" variant="outlined" />
          <TextField sx={{ mt: '1rem' }} fullWidth id="outlined-basic" label="Email" type="email" variant="outlined" />
          <TextField sx={{ mt: '1rem' }} fullWidth id="outlined-basic" label="Contraseña" variant="outlined"  type="password" />
          <TextField
            sx={{ mt: '1rem' }}
            fullWidth
            id="outlined-select-currency"
            select
            label="País"
            value={country}
            onChange={handleChange}
            helperText="Please select your currency"
          >
            {countries?.map((option: any) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Button
            sx={{ mt: '1rem', py: "0.75rem" }}
            fullWidth
            variant="contained"
            size="large"
            type="submit"
          >
            Registro
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Register;