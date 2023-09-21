import { useState } from 'react'
import './App.css'

function App() {
  const [info, setInfo] = useState({
    todo: "",
    date: "",
  });
  const [todos, setTodos] = useState([]);


  const inputChanged = (event) => {
    setInfo({
      ...info, [event.target.name]: event.target.value,
    })
  }

  const addTodo = (event) => {
    event.preventDefault();
    const putTodo = {
      todo: info.todo,
      date: info.date,
    }
    setTodos([...todos, putTodo]);
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
            </tr>)
        }
        </tbody>
      </table>
      </div>
    </>
  )
}

export default App
