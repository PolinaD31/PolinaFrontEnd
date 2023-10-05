import { useState, useRef } from 'react'
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function Todolist() {
    const [info, setInfo] = useState({desc: "", date: "", priority: ""});
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();
  
    const [columnDefs] = useState([
      {field: 'desc', sortable: true, filter: true, headerName: 'Description', floatingFilter: true},
      {field: 'priority', sortable: true, filter: true, 
      cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}, 
      floatingFilter: true},
      {field: 'date', sortable: true, filter: true, headerName: 'Due Date', floatingFilter: true}
    ]);
  
  
    const inputChanged = (event) => {
      setInfo({
        ...info, [event.target.name]: event.target.value,
      })
    }
  
    const addTodo = (event) => {
      event.preventDefault();
      setTodos([...todos, info]);
      setInfo({desc: '', date: '', priority: ''})
    }
  
    const deleteTodo = (event) => {
      //const newTodos = todos.filter((todo, i) => i != gridRef.current.getSelectedNodes()[0].id);
      // If using firm always use event.preventDefault
      event.preventDefault();
      if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((todo, i) => i != gridRef.current.getSelectedNodes()[0].id));
      } else {
        alert('Please select row first')
      }
    }
  
    return (
      <>
        <div className='container'>
        <header className="box">
            <h3>Simple Todolist</h3>
        </header>
        <form onSubmit={addTodo} className="box">
          <input placeholder='Description' type="text" name="desc" value={info.desc} onChange={inputChanged} />
          <input placeholder='Priority' name="priority" value={info.priority} onChange={inputChanged}/>
          <input type="date" name="date" value={info.date} onChange={inputChanged} />
          <input className="add" type="submit" value="Add" />
          <button onClick={deleteTodo}>Delete</button>
        </form>
        <div className='ag-theme-material' style={{width: '100%', height: 500}}>
          <AgGridReact 
          ref={gridRef}
          // You don't always have to do this extra step
          // To know if you have to do this READ DOCUMENTATION
          onGridReady={parms => gridRef.current = parms.api}
          rowSelection='single'
          rowData={todos}
          columnDefs={columnDefs} 
          animateRows={true}
          />
        </div>
        </div>
      </>
    )
}

export default Todolist;