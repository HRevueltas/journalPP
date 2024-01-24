import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { Link as RouterLink } from 'react-router-dom'

export const LoginPage = () => {
  return (

    <AuthLayout title='Login'>
      <form >
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
            />
          </Grid>

          {/* contrasena */}
          <Grid item xs={12} sx={{ mt: 2, mt: 1 }}>
            <TextField
              label={'password'}
              type="password"
              placeholder="password"
              fullWidth
            />
          </Grid>


          {/* botones */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button component={RouterLink} to={'/'} variant="contained" fullWidth>Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
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
