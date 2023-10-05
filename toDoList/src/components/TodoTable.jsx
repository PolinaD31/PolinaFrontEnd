import React from "react";

export default function TodoTable(props) {
    return(
             <table>
        <tbody>
          <tr className="bold">
            <td>Date</td>
            <td>Priority</td>
            <td>Description</td>
          </tr>
        {
          props.todos.map((todo, index) => 
          <tr key={index}>
            <td>{todo.date}</td>
            <td>{todo.priority}</td>
            <td>{todo.todo}</td>
            <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
            </tr>)
        }
        </tbody>
      </table>
    )
}