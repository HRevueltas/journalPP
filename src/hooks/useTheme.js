import { ThemeContext } from "@emotion/react";
import { useContext } from "react";

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
    }
    return context;
  };