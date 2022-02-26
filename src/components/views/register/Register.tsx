import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, TextField, MenuItem, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from  '../../../assets/img/logo.png'
import { COUNTRIES, CCAA } from '../../../constants/data';
import { register } from '../../../services/AuthService';
import './Register.css'

const GENDERS = ["Hombre", "Mujer", "Otro", "Prefiero no decirlo"];

const schema = yup.object().shape({
  name: yup.string().required("Introduce tu nombre"),
  surname: yup.string().required("Introduce tus apellidos"),
  email: yup.string().required("Introduce tu correo electrónico").email("Introduce un correo electrónico válido"),
  age: yup.number().typeError("Introduce tu edad").required("Introduce tu edad"),
  gender: yup.string().oneOf(GENDERS, "Elige una de las opciones anteriores").required("Elige una de las opciones anteriores"),
  password: yup.string().required("Introduce tu contraseña").length(8, "Tu contraseña debe tener al menos 8 caracteres"),
  country: yup.string().required("Selecciona tu país").oneOf(COUNTRIES, "Selecciona tu país"),
  ccaa: yup.string().oneOf(CCAA, "Selecciona tu Comunidad Autónoma"),
}).required();

const Register = () => {
  let navigate = useNavigate();

  const { handleSubmit, control, formState: { errors, isSubmitting }, watch } = useForm({
    resolver: yupResolver(schema),
  });

  const country = watch("country")

  const onSubmit = async (data: Object) => {
    try {
      await register(data)

      navigate('/login')
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      document.querySelector('.Mui-error')?.scrollIntoView({ behavior: "smooth", block: "end", inline: "start" });
    }
  }, [errors])

  return (
    <div id="Register">
      <Container maxWidth="sm">
        <div style={{ textAlign: 'center' }}>
        <img style={{ marginTop: '2rem' }} src={ Logo } alt="Logo de la app"></img>
        </div>

        <Typography variant="h4" sx={{ fontWeight: "bold", mt: '2rem' }} component="div" gutterBottom>
          ¡Bienvenido!
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value, name } }) => (
              <TextField error={!!errors[name]} helperText={errors[name]?.message || ""} onChange={onChange} value={value} sx={{ mt: '1.5rem' }} fullWidth label="Nombre" variant="filled" />
            )}
          />
          <Controller
            name="surname"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value, name } }) => (
              <TextField error={!!errors[name]} helperText={errors[name]?.message || ""} onChange={onChange} value={value} sx={{ mt: '1.5rem' }} fullWidth label="Apellidos" variant="filled" />
            )}
          />
          <Controller
            name="age"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value, name } }) => (
              <TextField error={!!errors[name]} helperText={errors[name]?.message || ""} onChange={onChange} value={value} sx={{ mt: '1.5rem' }} fullWidth label="Edad" type="number" variant="filled" />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value, name } }) => (
              <TextField error={!!errors[name]} helperText={errors[name]?.message || ""} onChange={onChange} value={value} sx={{ mt: '1.5rem' }} fullWidth label="Email" type="email" variant="filled" />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value, name } }) => (
              <TextField error={!!errors[name]} helperText={errors[name]?.message || ""} onChange={onChange} value={value} sx={{ mt: '1.5rem' }} fullWidth label="Password" type="password" variant="filled" />
            )}
          />
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value, name } }) => (
              <TextField error={!!errors[name]} onChange={onChange} value={value} sx={{ mt: '1.5rem' }} fullWidth label="Género" select variant="filled" helperText="Selecciona tu género">
                {GENDERS.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value, name } }) => (
              <TextField error={!!errors[name]} onChange={onChange} value={value} sx={{ mt: '1.5rem' }} fullWidth label="País" select variant="filled" helperText="Selecciona tu país">
                {COUNTRIES.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          {country === "España" && (
            <Controller
              name="ccaa"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <TextField error={!!errors[name]} onChange={onChange} value={value} sx={{ mt: '1.5rem' }} fullWidth label="Comunidad Autónoma" select variant="filled" helperText="Selecciona tu Comunidad Autónoma">
                  {CCAA.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          )}
          <LoadingButton
            sx={{ my: '1rem' }}
            loading={isSubmitting}
            fullWidth
            color="secondary"
            size="large"
            type="submit"
            variant="contained"
          >
            Enviar
          </LoadingButton>
        </form>
      </Container>
    </div>
  );
};

export default Register;