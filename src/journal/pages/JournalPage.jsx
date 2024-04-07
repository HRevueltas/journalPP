import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

    const { isSaving , active} = useSelector(state => state.journal)


    const dispatch = useDispatch()
    const onClickNewNote = () => {
        dispatch(startNewNote())
    }
    return (
        <>
            <JournalLayout>
                {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam, sit, incidunt maxime dolore neque veritatis amet a, eligendi harum quae numquam corrupti cum sequi maiores. Optio in suscipit autem!

                </Typography> */}

                {
                    !!(active)
                    ?<NoteView/>
                    :<NothingSelectedView />

                }




                <IconButton
                    disabled={isSaving}
                    onClick={onClickNewNote}
                    size="large"
                    sx={{
                        color: 'white',
                        backgroundColor: 'secondary.main',
                        transition: 'all .3s ease',
                        '&:hover': {
                            backgroundColor: 'secondary.main', opacity: 0.4
                        },
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                    }}
                >
                    <AddOutlined sx={{ fontSize: 30 }} />
                </IconButton>
            </JournalLayout>

        </>
    )
}
