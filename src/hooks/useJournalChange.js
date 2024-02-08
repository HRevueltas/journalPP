import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setActiveNote } from "../store/journal"


export const useJournalChange = (formState = {}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [dispatch, formState])


}        
