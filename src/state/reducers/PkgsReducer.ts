import { ActionTypes } from '../action-types'
import { Actions } from '../actions'

interface PkgsState {
    loading: boolean,
    error: string | null,
    data: string[]
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (
        state: PkgsState = initialState, action: Actions
    ): PkgsState => {
    switch(action.type) {
        case ActionTypes.SearchPkgs:
            return { loading: true, error: null, data: [] }
        case ActionTypes.SearchPkgsSuccess:
            return { loading: false, error: null, data: action.payload }
        case ActionTypes.SearchPkgsError:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state
    }
}

export default reducer
