import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { ThemeContext } from '@emotion/react';
import { getThemeByName } from './themes';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AppTheme = ({ children }) => {
    const [theme, setTheme] = useState('purple');
    const [localTheme, setLocalTheme] = useLocalStorage('theme_color', theme);
    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        setLocalTheme(newTheme);
    };
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <ThemeProvider theme={getThemeByName(localTheme)}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
