import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();


// registrar con google
export const signInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials  =  GoogleAuthProvider.credentialFromResult(result)
        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }

    }
}

// registrar user con email y password
export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL } = resp.user
        // TODO : Actualizar displayName en firebase

        await updateProfile(FirebaseAuth.currentUser, { displayName })
        return {
            ok: true,
            uid, photoURL, displayName, email
        }


    } catch (error) {

        return {
            ok: false,
            errorMessage: error.message,
        }
    }

}

export const loginWithEmailPassword = async ({email,password}) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { displayName, photoURL, uid } = resp.user


        return {
            ok: true,
             displayName, photoURL, uid
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        }
    }

}

export const logoutFirebase = async()=>{

    return await FirebaseAuth.signOut()
}

