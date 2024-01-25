import { AuthLayout } from "../layout/AuthLayout"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"
import { useState } from "react"



const formData = {
  email: '',
  password: '',
  displayName: ''
}

// const formValidations = {
//   email: [(value) => value.includes('@'), 'El correo debe tener @'],
//   password: [(value) => value.length >= 6, ' La contraseña debe tener al menos 6 caracteres'],
//   displayName: [(value) => value.length, 'El nombre es obligatorio'],

// }

const formValidations = {
  email: [
    (value) => /\S+@\S+\.\S+/.test(value),
    'El correo electrónico no es válido. Debe seguir el formato nombre@dominio.com'
  ],
  password: [
    (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(value),
    'La contraseña debe tener al menos 6 caracteres y contener al menos una mayúscula, una minúscula y un número'
  ],
  displayName: [
    (value) => value.trim().length > 0,
    'El nombre es obligatorio'
  ],
};


export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  console.log(emailValid);
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true)
    console.log(formState);
  }


  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid
          container
        >

          {/* nombre */}
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label={'name'}
              type="text"
              placeholder="Harold Revueltas"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              required

            />
          </Grid>
          {/* correo */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label={'email'}
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              required

            />
          </Grid>

          {/* contrasena */}
          <Grid item xs={12} sx={{ mt: 2, mt: 1 }}>
            <TextField
              label={'password'}
              type="password"
              placeholder=""
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              required

            />
          </Grid>


          {/* botones */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" fullWidth type="submit"  >Create account</Button>
            </Grid>

          </Grid>

          <Grid container direction={'row'} justifyContent={'end'}>
            <Typography sx={{ mr: 1 }}>Already registered?</Typography>
            <Link component={RouterLink} to={'/auth/login'} color={"inherit"} >Login</Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
