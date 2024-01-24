import {  Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoute } from "../journal/routes/JournalRoute"


export const AppRouter = () => {


  return (


    <Routes>
        {/* login and register */}
        <Route path="/auth/*"  element={<AuthRoutes/>} />

        {/* Journal app */}
        <Route path="/*"  element={<JournalRoute/>} />

    </Routes>
  )
}
