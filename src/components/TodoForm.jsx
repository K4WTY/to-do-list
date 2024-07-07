import { useState } from "react"

export function TodoForm({ addTodo }) {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) return
        setValue("")
        setCategory("")
        addTodo(value, category)
    }

    return (
        <div className="todo-form mt-4">
            <h4>Criar tarefa:</h4>
            <form onSubmit={ handleSubmit }>
                <input className="form-control" type="text" placeholder="Digite o titulo" onChange={(e)=> setValue(e.target.value)} value={ value } />
                <select className="form-select my-3" onChange={(e)=> setCategory(e.target.value)} value={ category }>
                    <option>Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit" className="btn btn-primary">Criar tarefa</button>
            </form>
        </div>
    )
}