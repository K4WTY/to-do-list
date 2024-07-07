export function Todo({ todoData, removeTodo, completeTodo }) {
    return (
        <div className="todo shadow d-flex justify-content-between align-items-center my-2 p-2" style={{textDecoration: todoData.isCompleted ? "line-through" : "" }}>
            <div className="content">
                <p className="m-0">{ todoData.text }</p>
                <p className="category m-0">({ todoData.category })</p>
            </div>
            <div>
                <button className="btn btn-success me-3" onClick={() => completeTodo(todoData.id)}>Completar</button>
                <button className="btn btn-danger" onClick={() => removeTodo(todoData.id)}>X</button>
            </div>
        </div>
    )
}