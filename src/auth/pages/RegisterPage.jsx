import { AuthLayout } from "../layout/AuthLayout"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { Link as RouterLink } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
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

          {/* nombre */}
          <Grid item xs={12} sx={{ mt: 1}}>
            <TextField  
              label={'name'}
              type="text"
              placeholder="Harold Revueltas"
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
            <Grid item xs={12} sm={12}>
              <Button component={RouterLink} to={'/'} variant="contained" fullWidth>Create account</Button>
            </Grid>

          </Grid>

          <Grid container direction={'row'} justifyContent={'end'}>
            <Typography sx={{mr:1}}>Already registered?</Typography>
            <Link component={RouterLink} to={'/auth/login'} color={"inherit"} >Login</Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
