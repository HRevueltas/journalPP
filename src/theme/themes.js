import { createTheme } from "@mui/material";
import { red, pink, deepOrange } from "@mui/material/colors";

export const themes = {
    purple: createTheme({
        palette: {
            primary: {
                main: "#262254",
            },
            secondary: {
                main: "#543884",
            },
            error: {
                main: red.A400,
            },
        },
    }),
    blue: createTheme({
        palette: {
            primary: {
                main: '#2979ff',
            },
            secondary: {
                main: '#006064',
            },
            error: {
                main: red.A400,
            },
        },
    }),
    pink: createTheme({
        palette: {
            primary: pink,
            secondary: {
                main: '#ff80ab',
            },
        },
        error: {
            main: red.A400,
        },
    }),
    orange: createTheme({
        palette: {
            primary: deepOrange,
            secondary: {
                main: '#ff9800',
            },
        },
    }),
    green: createTheme({
        palette: {
            primary: {
                main: '#43a047',
            },
            secondary: {
                main: '#c0ca33',
            },
        },
    }),
    yellow: createTheme({
        palette: {
            primary: {
                main: '#ffea00',
            },
            secondary: {
                main: '#ff8f00',
            },
        },
    })
};

export const getThemeByName = (name) => {
    return themes[name]
}
