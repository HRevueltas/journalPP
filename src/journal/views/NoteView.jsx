import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "./ImageGallery"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks"
import { useEffect, useMemo, useRef, useState } from "react"
import { useJournalChange } from "../../hooks/useJournalChange"
import { startSaveNote, startUploadingFiles } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'



export const NoteView = () => {
    const dispatch = useDispatch()
    const { active:note, messageSaved, isSaving } = useSelector(state => state.journal)

    const { body, title, date, formState, onInputChange } = useForm(note)
    useJournalChange(formState)

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toLocaleString()
    }, [date]);

    const fileInputRef = useRef()


    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota guardada', messageSaved, 'success');
        }
    }, [messageSaved])


    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        dispatch(startUploadingFiles(target.files))
    }
    
    

    return (
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

            <Grid container >
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

            <Grid item sx={{ mt: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
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
            </Grid>

            {/* <Grid
                
                container
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                padding={10}
                border={'3px dashed '}
                mt={2}
                disabled={isSaving}
                sx={{ borderColor: isDrag ? 'green' : 'primary', opacity: isDrag ? .8 : 1, cursor: 'pointer', backgroundColor: '#00000010' }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => {
                    handleDrop(e);
                    handleDropFiles(); // Procesa los archivos soltados
                }}
            >

                <UploadOutlined disabled={isSaving} color="primary" fontSize="large" />
                <Typography textAlign={'center'} sx={{ mt: 1, fontSize: "20px" }}>Drag & drop your images here</Typography>
                <Typography sx={{ fontSize: "16px" }}>or <b>click here</b> to select</Typography>
                <Button sx={{ backgroundColor: 'primary.main', mt: 1, color: "white", fontWeight: 300, }} >Upload</Button>
            </Grid> */}

            <ImageGallery images={note.imageUrl} title={note.title} />
        </Grid>
    )
}
