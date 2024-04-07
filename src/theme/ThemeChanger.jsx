import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ColorLens, ColorLensOutlined, PaletteOutlined, PaletteSharp } from '@mui/icons-material';
import { useState } from 'react';
import { themes } from './themes';

const ITEM_HEIGHT = 48;
export const ThemeChanger = ({ changeTheme }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    // console.log(themes.blue.palette.primary.main)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleThemeChange = (theme) => {
        changeTheme(theme);
        handleClose();
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <PaletteOutlined  />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {Object.keys(themes).map((themeName) => (
                    <MenuItem
                        key={themeName}
                        onClick={() => handleThemeChange(themeName)}
                        style={{
                            backgroundColor: themes[themeName].palette.primary.main,
                            color: 'white',
                            opacity: 0.8
                        }}
                    >
                        {themeName}

                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
