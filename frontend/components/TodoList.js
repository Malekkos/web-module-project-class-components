import React from 'react'
import Todo from "./Todo"

export default class TodoList extends React.Component {

  // Receive the Todo.js array, then map over it, generating a new <Todo /> for each element

  render() {
    const { todos } = this.props
    return (
      <div>
        TodoList
        {todos.map((val,idx) => (
          <Todo key={idx} name={val.name} completed={val.completed} />
        ))
        }
      </div>
    )
  }
}
