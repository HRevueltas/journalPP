import { Avatar, Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, toggleButtonClasses } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"

export const SideBar = ({ drawerWidth }) => {
    const { displayName, photoURL } = useSelector(state => state.auth)
    const { notes } = useSelector(state => state.journal)



    return (
        <Box
            component={'nav'}

            sx={{ width: { sm: `${drawerWidth}px` }, flexShrink: { sm: 0 }, }}
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

                    <Avatar alt={displayName} src={photoURL} sx={{ marginRight: 2 }} />
                    <Typography variant="h6" noWrap component={'div'} >
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />



                {/* list */}

                <List>
                    {
                        notes.map(note => (
                                <SideBarItem   key={note.id} {...note} />
                        ))


                    }
                </List>



            </Drawer>
        </Box>
    )
}
