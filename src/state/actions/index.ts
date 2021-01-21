import { ActionTypes } from '../action-types'

interface Action {
    type: ActionTypes.SearchPkgs
}

interface ActionSuccess {
    type: ActionTypes.SearchPkgsSuccess,
    payload: any[]
}

interface ActionError {
    type: ActionTypes.SearchPkgsError
    payload: string
}

export type Actions = 
    | Action
    | ActionSuccess
    | ActionError
