import {v4 as uuidv4} from 'uuid'
import { useContext } from "react"
import { ActionTypes } from "./types"
import { AppContext } from "@/context/app.context"

export default function useAddSectionHook() {
    const { state, dispatch } = useContext(AppContext)

    const addNewSectionHandler = (actionType: ActionTypes , value: string, parentSectionId?: string) => {
        dispatch({ type: actionType, payload: { id: uuidv4(), name: value, parentId: parentSectionId } })
    }

    const editSectionHandler = (value: string, id: string) => {
        dispatch({ type: 'EDIT_SECTION', payload: { id, name: value } })
    }

    const deleteSectionHandler = (id: string) => {
        dispatch({ type: 'DELETE_SECTION', payload: { id } })
    }
    return {
        sections: state.sections,
        userDetail: { role: state?.user?.role, permissions: state?.user?.permissions },
        deleteSectionHandler,
        editSectionHandler,
        addNewSectionHandler
    }
}
