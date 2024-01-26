import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
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

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())



        const result = await signInWithGoogle()

        if (!result.ok) return dispatch(logout(result.errorMessage));

        console.log({result})
        dispatch(login(result))
    }

}


export const startCreatingUserWithEmailPassword =({email,password,displayName})=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());

        const resp = await registerUserWithEmailPassword({email, password, displayName})

        if (!resp.ok) return dispatch(logout(resp.errorMessage));

        console.log({resp})
        dispatch(login(resp))
        
    }
}