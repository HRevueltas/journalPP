import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = (email, password) => {
    
    return async (dispatch) => {
        dispatch(checkingCredentials())
        // dispatch(login())
        // dispatch(logout())
        // login
        // logout
    }

}

export const startGoogleSignIn = ()=>{
    return async (dispatch) => {
        dispatch(checkingCredentials())
        // dispatch(login())
        // dispatch(logout())
        // login
        // logout
    }

}