import { CircularProgress, IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { SideBar } from "../components"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
    return (
        <>
            <JournalLayout>
                {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam, sit, incidunt maxime dolore neque veritatis amet a, eligendi harum quae numquam corrupti cum sequi maiores. Optio in suscipit autem!

                </Typography> */}
                <NothingSelectedView />

                {/* <NoteView/> */}


                <IconButton
                    size="large"
                    sx={{
                        color: 'white',
                        backgroundColor: 'error.main',
                        transition: 'all .3s ease',
                        '&:hover': {
                            backgroundColor: 'error.main', opacity: 0.9},
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
