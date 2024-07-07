export function Search({ search, setSearch }) {
    return (
        <div className="search mb-4">
            <form>
                <h4>Pesquisar:</h4>
                <input type="text" className="form-control" value={ search } onChange={(e) => setSearch(e.target.value)} />
            </form>
        </div>
    )
}