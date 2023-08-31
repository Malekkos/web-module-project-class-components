import React from 'react'
import Todo from "./Todo"

export default class TodoList extends React.Component {

  // Receive the Todo.js array, then map over it, generating a new <Todo /> for each element


  render() {
    const { todos, handleCompleted } = this.props
    return (
      <div>
        {todos.map((val) => (
          <Todo id={val.id} name={val.name} completed={!val.completed} handleCompleted={handleCompleted} />
        ))
        }
        
      </div>
    )
  }
}
