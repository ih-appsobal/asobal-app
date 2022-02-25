import React from 'react';
import { Button, Container, TextField } from '@mui/material';
import Logo from  '../../../assets/img/logo.png'
import './Login.css'

const Login = () => {
  return (
    <div id="Login">
      <Container maxWidth="sm">
        <img src={Logo}></img>
        <form>
          <TextField sx={{ mt: '1rem' }} fullWidth id="outlined-basic" label="Email" type="email" variant="outlined" />
          <TextField sx={{ mt: '1rem' }} fullWidth id="outlined-basic" label="Contraseña" variant="outlined" type="password" />
          <Button
            sx={{ mt: '1rem', py: "0.75rem" }}
            fullWidth
            variant="contained"
            size="large"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;