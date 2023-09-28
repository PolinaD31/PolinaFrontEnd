import { useState } from 'react'
import './App.css'
import TodoTable from './components/Todolist';

function App() {
  const [info, setInfo] = useState({desc: "", date: ""});
  const [todos, setTodos] = useState([]);


  const inputChanged = (event) => {
    setInfo({
      ...info, [event.target.name]: event.target.value,
    })
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, info]);
  }

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <>
      <div className='container'>
      <header className="box">
          <h3>Simple Todolist</h3>
      </header>
      <form onSubmit={addTodo} className="box">
        <label>Description:</label>
        <input type="text" name="todo" value={info.todo} onChange={inputChanged} />
        <label>Date:</label>
        <input type="text" name="date" value={info.date} onChange={inputChanged} />
        <input className="add" type="submit" value="Add" />
      </form>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
      </div>
    </>
  )
}

export default App
