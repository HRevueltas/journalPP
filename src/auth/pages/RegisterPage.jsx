import { AuthLayout } from "../layout/AuthLayout"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunk"

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

  const { status, errorMessage } = useSelector(state => state.auth)
  const isCheckingAuthentincation = useMemo(status => status === 'checking', [status])

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false)

  // valores form
  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);


  // manejar el submit
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  }


  return (
    <AuthLayout title="Register">

      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid
          container
        >

          {/* nombre */}
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label={'name'}
              type="text"
              placeholder="John Doe"
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
              placeholder="•••••••••••"
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
          <Grid item xs={12} sm={12} display={!!errorMessage?'':'none'}>
              <Alert severity="error" >
                {errorMessage}
              </Alert>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                disabled={isCheckingAuthentincation}
                variant="contained"
                fullWidth
                type="submit"
              >Create account</Button>
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
