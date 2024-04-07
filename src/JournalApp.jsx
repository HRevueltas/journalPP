import { useState } from "react"
import { AppRouter } from "./router/AppRouter"
import { AppTheme, blueTheme, purpleTheme } from "./theme"
export const JournalApp = () => {

//   const [theme, setTheme] = useState(blueTheme)

// const handleThemeChange = () => {
    
// }

  return (
    <AppTheme >
      <AppRouter />
    </AppTheme>
  )
}
