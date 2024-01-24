import { TurnLeftOutlined, TurnedInNot, TurnedInTwoTone } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, toggleButtonClasses } from "@mui/material"

export const SideBar = ({ drawerWidth }) => {
    return (
        <Box
            component={'nav'}
            
            sx={{ width: { sm: `${drawerWidth}px` }, flexShrink: { sm: 0 },  }}
        >

            <Drawer
                variant="permanent"
                open={true}
                // sx={{
                //     display: { xs: 'block' },
                //     '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,  },
                // }}
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { 
                        boxSizing: 'border-box', 
                        width: drawerWidth,
                        overflow: 'auto', // Asegúrate de que overflow sea 'auto' para que la barra de desplazamiento sea visible
                    },
                    '& .MuiDrawer-paper::-webkit-scrollbar': {
                        width: '10px', // Establece el ancho de la barra de desplazamiento
                    },
                    '& .MuiDrawer-paper::-webkit-scrollbar-thumb': {
                        backgroundColor: 'primary.main', // Color del pulgar de la barra de desplazamiento
                        borderRadius: ' 5px', // Bordes redondeados del pulgar
                    },
                }}
            >

                <Toolbar>
                    <Typography variant="h6" noWrap component={'div'} >
                        Harold Revueltas
                    </Typography>
                </Toolbar>
                <Divider />



                {/* list */}

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'].map(text => (

                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon  >

                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container >

                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, nulla.'} />

                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))


                    }
                </List>



            </Drawer>
        </Box>
    )
}
