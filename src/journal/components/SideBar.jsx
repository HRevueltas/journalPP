// SideBar.jsx
import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";
import { AccountMenu } from "./AccountMenu";
import { SearchInput } from "./SearchInput";

export const SideBar = ({ drawerWidth, isOpen, onClose, isSmallScreen }) => {
    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);
    
    return (
        <Box component={'nav'} sx={{ width: { sm: `${drawerWidth}px` }, flexShrink: { sm: 0 } }}>
            <Drawer
                variant={isSmallScreen ? 'temporary' : 'permanent'}
                open={isOpen}
                onClose={onClose}
                sx={{
                    display: { xs: 'block', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        overflow: 'auto',
                    },
                    '& .MuiDrawer-paper::-webkit-scrollbar': {
                        width: '4px',
                    },
                    '& .MuiDrawer-paper::-webkit-scrollbar-thumb': {
                        backgroundColor: 'primary.main',
                        borderRadius: '5px',
                    },
                }}
            >
                <Toolbar>
                    <AccountMenu />
                    <Typography ml={2} variant="h6" noWrap component={'div'}>
                        {displayName}
                    </Typography>
                </Toolbar>
                <SearchInput />
                <Divider />
                <List>
                    {notes.map(note => (<SideBarItem key={note.id} {...note} />))}
                </List>
            </Drawer>
        </Box>
    );
};
