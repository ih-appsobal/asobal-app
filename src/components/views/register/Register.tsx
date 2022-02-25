import React from 'react';
import { Button, Container, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Logo from  '../../../assets/img/logo.png'
import './Register.css'

const Register = () => {
  return (
    <div id="Register">
      <Container maxWidth="sm">
        <img src={Logo}></img>
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
            onChange={() => {}}
            helperText="Please select your currency"
          >
            {/* {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} */}
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