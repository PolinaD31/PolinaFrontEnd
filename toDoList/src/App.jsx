import { useState } from 'react'
import './App.css'

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
      <table>
        <tbody>
          <tr className="bold">
            <td>Date</td>
            <td>Description</td>
          </tr>
        {
          todos.map((todo, index) => 
          <tr key={index}>
            <td>{todo.date}</td>
            <td>{todo.todo}</td>
            <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
            </tr>)
        }
        </tbody>
      </table>
      </div>
    </>
  )
}

export default App
