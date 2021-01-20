import { combineReducers } from 'redux'
import PkgsReducer from './PkgsReducer'

const reducers = combineReducers({
    pkgs: PkgsReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>
