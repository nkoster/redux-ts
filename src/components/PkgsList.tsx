import { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { useActions } from '../hooks/useActions'

const PkgsList: React.FC = () => {

    const [term, setTerm] = useState('')
    const { searchPkgs } = useActions()
    const { loading, error, data }= useTypedSelector((state) => state.pkgs)
    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
        setTerm(evt.target.value)

    const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        searchPkgs(term)
        setTerm('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={onChange} />
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>loading...</h3>}
            {data && data.map((pkg, i) => <div key={pkg.name}>{i+1} {pkg.name} {pkg.version}</div>)}
        </div>
    )
}

export default PkgsList
