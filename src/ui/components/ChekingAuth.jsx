import { CircularProgress, Grid, Typography } from '@mui/material'
import React from 'react'

export const ChekingAuth = () => {
    return (
        <Grid
            container
            spacing={0}
            direction={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            // bgcolor={'purple'}
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4, }}>

            <Grid
                container
                direction={'row'}
                justifyContent={"center"}
                
                >
                        <CircularProgress color='warning'/>
                        
            </Grid>
        </Grid>
    )
}
