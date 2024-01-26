import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
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

        console.log({ error });

        return {
            ok: false,
            errorMessage
        }

    }
}

// registrar user con email y password
export const registerUserWithEmailPassword = async ({ email, password }) => {

    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password )
        const {uid, photoURL} = resp.user
        console.log(resp);

        return{
            ok:true,
            uid, photoURL
         }


    } catch (error) {

        console.log(error);

        return {
            ok: false,
            errorMessage: error.message
        }
    }

}