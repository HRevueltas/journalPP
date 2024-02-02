import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoute } from "../journal/routes/JournalRoute"
import { ChekingAuth } from "../ui"
import { useCheckAuth } from "../hooks"


export const AppRouter = () => {




  const { status } = useCheckAuth()

  if (status === 'checking') {
    return <ChekingAuth />
  }

  return (


    <Routes>

      {status === 'authenticated'
        ? <Route path="/*" element={<JournalRoute />} />
        : <Route path="/auth/*" element={<AuthRoutes />} />
      }

      <Route path="/*" element={<Navigate to={'/auth/login'} />} />



    </Routes>
  )
}
