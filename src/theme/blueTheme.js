import { createTheme } from "@mui/material";
import { blue, purple, red  } from "@mui/material/colors";


export const blueTheme = createTheme({

    palette: {
        primary: {
            main: blue[800],
        },
        secondary: {
            main: blue[200],
        },
        error: {
            main: red.A400,
            },
    },
});