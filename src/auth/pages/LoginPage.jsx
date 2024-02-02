import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import { useForm } from '../../hooks'
import { AuthLayout } from '../layout/AuthLayout'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunk'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { Link as RouterLink } from 'react-router-dom'

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth)

  const dispatch = useDispatch();
  const { email, password, onInputChange, formState } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({email, password}))
  }

  const onGoogleSignIn = () => {
    console.log('incio con google');
    dispatch(startGoogleSignIn())

  }

  return (


    <AuthLayout title='Login' >
      <form onSubmit={onSubmit}  className="animate__animated animate__fadeIn animate__faster">
        <Grid
          container
        >
          {/* correo */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label={'email'}
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}

            />
          </Grid>

          {/* contrasena */}
          <Grid item xs={12} sx={{ mt: 2, mt: 1 }}>
            <TextField
              label={'password'}
              type="password"
              placeholder="password"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>


          {/* botones */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity="error" >
                {errorMessage}
              </Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type='submit' disabled={isAuthenticating || email===''}>Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating}>
                <Google />
                <Typography sx={{ ml: 1 }} >Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={'row'} justifyContent={'end'}>
            <Link component={RouterLink} to={'/auth/register'} color={"inherit"} >Create account</Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
