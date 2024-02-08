import { Store, TurnedIn, TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setActiveNote } from "../../store/journal"
import './sideBarItem.css'
export const SideBarItem = ({ title = '', id, body, imageUrl = [], date, }) => {
const {active} = useSelector(state => state.journal)
  const dispatch = useDispatch()

  const onClickNote = () => {
    dispatch(setActiveNote({ title, id, body, imageUrl, date }))
  }
  const newTitle = useMemo(() => {

    return title.length > 17
      ? title.substring(0, 17) + '...'
      : title
  }, [title])
  return (
    <ListItem disablePadding onClick={onClickNote} className={`${active && active.id  === id ? 'animationBorder':''} `}>
      <ListItemButton>
        <ListItemIcon  >

   <TurnedInNot />
          
        </ListItemIcon>
        <Grid container padding={1}  >

          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />

        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
