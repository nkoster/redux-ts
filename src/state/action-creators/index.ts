import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from '../action-types'
import { Actions } from '../actions'

export const searchPkgs = (term: string) => {
    return async (dispatch: Dispatch<Actions>) => {
        dispatch({ type: ActionTypes.SearchPkgs })
        try {
            const { data } = await axios.get('https://api.npms.io/v2/search',{
                params: {
                    q: term,
                    size: 250
                }
            })
            dispatch({
                type: ActionTypes.SearchPkgsSuccess,
                payload: data.results.map((pkg:any) => {
                    return {
                        name: pkg.package.name,
                        version: pkg.package.version
                    }
                })
            })
        } catch(err) {
            dispatch({
                type: ActionTypes.SearchPkgsError,
                payload: err.message
            })
        }
    }
}

