import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks'
import { AuthLayout } from '../layout/AuthLayout'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunk'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { Link as RouterLink } from 'react-router-dom'

export const LoginPage = () => {

  const dispatch = useDispatch();
  // const { status } = useSelector(state => state.auth)
  
  const { email, password, onInputChange, formState } = useForm({
    email: 'harold@google.com',
    password: '123456'
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication())
  }

  const onGoogleSignIn = () => {
    console.log('incio con google');
    dispatch(startGoogleSignIn())

  }
  return (


    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
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
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type='submit' >Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={onGoogleSignIn}>
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
