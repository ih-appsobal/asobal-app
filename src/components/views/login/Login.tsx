import { useContext } from 'react';
import { Container, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import { login, LoginBody } from '../../../services/AuthService';
import Logo from  '../../../assets/img/logo.png'
import './Login.css'
import { UserContext } from '../../../contexts/AuthProvider';
import { setAccessToken } from '../../../store/AcessTokenStore';

const schema = yup.object().shape({
  email: yup.string().required("Introduce tu correo electrónico").email("Introduce un correo electrónico válido"),
  password: yup.string().required("Introduce tu contraseña").length(8, "Tu contraseña debe tener al menos 8 caracteres"),
}).required();

const Login = () => {
  const { getUser } = useContext(UserContext)
  let navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<LoginBody>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginBody) => {
    try {
      const response = await login(data);

      setAccessToken(response.access_token)

      await getUser();
      navigate('/app')
    } catch(err) {
      if (axios.isAxiosError(err)) {
        setError("email", { message: err.response?.data.errors.email })
      }
    }
  }

  return (
    <div id="Login">
      <Container maxWidth="sm">
        <img src={Logo} alt="logo"></img>
        <form>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value, name } }) => (
            <TextField sx={{ mt: '2rem' }} error={!!errors[name]} helperText={errors[name]?.message || ""} fullWidth label="Email" type="email" variant="filled" onChange={onChange} value={value} />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value, name } }) => (
            <TextField sx={{ mt: '2rem' }} error={!!errors[name]} helperText={errors[name]?.message || ""} fullWidth label="Contraseña" type="password" variant="filled" onChange={onChange} value={value} />
          )}
        />
          <LoadingButton
            sx={{ mt: '1rem' }}
            loading={isSubmitting}
            fullWidth
            size="large"
            type="button"
            onClick={handleSubmit(onSubmit)}
            variant="contained"
          >
            Enviar
          </LoadingButton>
          <p>Si aún no tienes cuenta <Link className="c-primary" to="/registro">regístrate aquí</Link></p>
        </form>
      </Container>
    </div>
  );
};

export default Login;