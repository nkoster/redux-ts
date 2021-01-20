import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from '../action-types'
import { Actions } from '../actions'

export const searchPkgs = (term: string) => {
    return async (dispatch: Dispatch<Actions>) => {
        dispatch({ type: ActionTypes.SearchPkgs })
        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search',{
                params: {
                    text: term
                }
            })
            dispatch({
                type: ActionTypes.SearchPkgsSuccess,
                payload: data.objects.map((pkg:any) => pkg.package.name)
            })
        } catch(err) {
            dispatch({
                type: ActionTypes.SearchPkgsError,
                payload: err.message
            })
        }
    }
}

