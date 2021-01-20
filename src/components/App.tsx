import { Provider } from 'react-redux'
import { store } from '../state'
import PkgsList from '../components/PkgsList'

const App = () => {
    return <Provider store={store}>
        <h1>Search for an NPM Package</h1>
        <PkgsList />
    </Provider>
}

export default App
