// NavBar.jsx
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { ThemeChanger } from "../../theme/ThemeChanger";
import { useTheme } from "@emotion/react";

export const NavBar = ({ drawerWidth = 240, onMenuIconClick }) => {
    const { changeTheme } = useTheme();

    return (
        <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
            <Toolbar>
                <IconButton color="inherit" edge="start" sx={{ mr: 2, display: { sm: 'none', md: 'none',  } }} onClick={onMenuIconClick}>
                    <MenuOutlined />
                </IconButton>
                <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant="h6" noWrap>
                        Journal
                    </Typography>
                    <ThemeChanger changeTheme={changeTheme} />
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
