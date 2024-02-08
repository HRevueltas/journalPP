import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote } from "./journalSlice";
import { fileUploads, loadNotes } from "../../helpers";
export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote())

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

        await setDoc(newDoc, newNote)

        newNote.id = newDoc.id;


        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))



    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth
        if (!uid) throw new Error('El UID del usuario no existe')

        const notesLoaded = await loadNotes(uid)

        dispatch(setNotes(notesLoaded))


    }
}


export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving())


        const { uid } = getState().auth
        const { active: note } = getState().journal

        const noteToFireBase = { ...note }
        delete noteToFireBase.id

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)

        await setDoc(docRef, noteToFireBase, { merge: true })

        dispatch(updateNote(note))
    }

}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving())

        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push(fileUploads(file));
        }

            
            const photosUrls = await Promise.all(fileUploadPromises)
            dispatch(setPhotosToActiveNote(photosUrls));
            console.log(photosUrls);

    }
}