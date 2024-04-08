import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "./ImageGallery";
import { useDispatch, useSelector } from "react-redux";
import { useForm, useLocalStorage } from "../../hooks";
import { useEffect, useMemo, useRef } from "react";
import { useJournalChange } from "../../hooks/useJournalChange";
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);

    const [localNote, setLocalNote] = useLocalStorage('lastNote', note);


    // TODO:
    // ?? guardar nota en local storage
    // Set the active note to the last note from local storage when the component mounts
    useEffect(() => {
        if (localNote) {
            dispatch(setActiveNote(localNote));
        }
    }, [dispatch, localNote]);

    // Update the last note in local storage whenever the active note changes
    useEffect(() => {
        setLocalNote(note);
    }, [note, setLocalNote]);
    


    const { body, title, date, formState, onInputChange } = useForm(note);
    useJournalChange(formState);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toLocaleString();
    }, [date]);

    const fileInputRef = useRef();

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota guardada', messageSaved, 'success');
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSaveNote());
    };

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        dispatch(startUploadingFiles(target.files));
    };

    const onDelete = () => {
        dispatch(startDeletingNote());
    };

    return (
        <>
        <Grid
            container
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ mb: 1 }}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item>
                <Typography fontSize={39} fontWeight={'light'}>{dateString}</Typography>
            </Grid>

            <Grid container  >
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Some awesome title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="standard"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    label="Description"
                    minRows={3}
                    maxRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid item sx={{ mt: 1, flexDirection: "column", alignItems: "center", justifyContent: "space-between" }} >
                <Button disabled={isSaving} onClick={onSaveNote} color="primary" sx={{ alignItems: 'center', justifyContent: 'center' }} >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    <Typography variant="p">Save</Typography>
                </Button>

                <input
                    type="file"
                    multiple
                    onChange={onFileInputChange}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                />
                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>

                <Button
                    onClick={onDelete}
                    color="error"
                    disabled={isSaving}
                    sx={{ ml: 2 }}
                >
                    <IconButton color="error" disabled={isSaving}>
                        <DeleteOutline />
                    </IconButton>
                    Delete
                </Button>
            </Grid>

            <ImageGallery images={note.imageUrl} title={note.title} />
        </Grid>

        </>
    );
};
