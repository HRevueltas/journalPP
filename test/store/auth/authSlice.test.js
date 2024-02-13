import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('pruebas en authSlice', () => {

    test('Debería tener el nombre de "auth" ', () => {

        const state = authSlice.reducer(initialState, {})

        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState)
    });

    test('debe de realizar autenticación', () => {


        const state = authSlice.reducer(initialState, login(demoUser))
        expect(state).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null
        })
    });
    test('debe de hacer logout sin argumentos', () => {

        let state = authSlice.reducer(authenticatedState, logout())
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        })

    });
    test('debe de hacer logout y mostrar mensaje de error', () => {

        const errorMessage = 'credenciales no son correctas'
        let state = authSlice.reducer(authenticatedState, {})
        // console.log(state);
        state = authSlice.reducer(authenticatedState, logout({ errorMessage }))
        // console.log(state);

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage
        })

    });

    test('debe de cambiar el estado a checking', () => {

        const state = authSlice.reducer(authenticatedState, checkingCredentials());
        expect(state.status).toBe('checking')
    });
})