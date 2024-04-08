import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { NavBar, SideBar } from "../components";

export const JournalLayout = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const drawerWidth = 350;

  const handleMenuIconClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <NavBar drawerWidth={drawerWidth} onMenuIconClick={handleMenuIconClick} />
        <SideBar drawerWidth={drawerWidth} isOpen={isSideBarOpen} onClose={() => setIsSideBarOpen(false)} isSmallScreen={isSmallScreen} />
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </>
  );
};
