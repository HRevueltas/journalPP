import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active:{
        //     id:'ABC',
        //     title:'',
        //     body:'',
        //     date:12234,
        //     imageUrls: [], img1.jpg , img2.jpg
        // }        

    },
    reducers: {
        setSaving: (state) => {
            state.isSaving = true
            state.messageSaved = ''
        },
        savingNewNote: (state) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) => {
            console.log(action.payload);
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.active = action.payload
            state.messageSaved = ''
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        updateNote: (state, action) => {
            state.isSaving = false

            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {

                    return action.payload;

                }
                return note;

            })

            state.messageSaved = `${action.payload.title}, actualizada correctamente`
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrl = [...state.active.imageUrl, ...action.payload];
            state.isSaving = false
        },
        deleteNoteById: (state, action) => {

        },
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,
} = journalSlice.actions;