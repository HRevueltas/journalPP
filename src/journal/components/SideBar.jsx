import { Avatar, Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, toggleButtonClasses } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"
import { useState } from "react"
import { AccountMenu } from "./AccountMenu"

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

                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        overflow: 'auto',
                    },
                    '& .MuiDrawer-paper::-webkit-scrollbar': {
                        width: '10px',
                    },
                    '& .MuiDrawer-paper::-webkit-scrollbar-thumb': {
                        backgroundColor: 'primary.main',
                        borderRadius: ' 5px',
                    },
                }}
                
            >

                <Toolbar>

                    {/* <Avatar
                        onClick={() => setMenu(!menu)

                        }
                        alt={displayName}
                        src={photoURL}
                        sx={{
                            marginRight: 2,
                            "&:hover": {
                                // Estilos que deseas aplicar al hacer hover
                                // Por ejemplo, cambiar el color de fondo
                                cursor: 'pointer'
                            }
                        }}
                    /> */}
                    <AccountMenu    />

                    <Typography ml={2} variant="h6" noWrap component={'div'} >
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        notes.map(note => (
                            <SideBarItem key={note.id} {...note} />
                        ))


                    }
                </List>



            </Drawer>
        </Box>
    )
}
