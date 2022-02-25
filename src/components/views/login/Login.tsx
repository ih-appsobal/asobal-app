import React from 'react';
import { Button, Container, TextField } from '@mui/material';
import Logo from  '../../../assets/img/logo.png'
import './Login.css'

const Login = () => {
  return (
    <div id="Login">
      <Container maxWidth="sm">
        <img src={Logo} alt="logo"></img>
        <form>
          <TextField sx={{ mt: '2rem' }} fullWidth label="Email" type="email" variant="filled" />
          <TextField sx={{ mt: '2rem' }} fullWidth label="Contraseña" variant="filled" type="password" />
          <Button
            sx={{ mt: '2rem', py: "0.75rem" }}
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            color="secondary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;