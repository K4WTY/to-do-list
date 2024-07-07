export function Filter({ filter, setFilter }) {
    return (
        <div className="filter mb-4">
            <h4>Filtrar:</h4>
            <div className="filter-options">
                <div>
                    <select className="form-select" value={ filter } onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
            </div>
        </div>
    )
}