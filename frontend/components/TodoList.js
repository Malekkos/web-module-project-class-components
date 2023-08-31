import React from 'react'
import Todo from "./Todo"

export default class TodoList extends React.Component {

  // Receive the Todo.js array, then map over it, generating a new <Todo /> for each element
  state = {
    showAll: true
  }

  toggleShowAll = evt => {
    this.setState({
      ...this.state,
      showAll: !this.state.showAll,
    })
  }
  render() {
    const { todos, handleCompleted } = this.props
    const filtered = todos.filter(val => val.completed || this.state.showAll)
    return (
      <div>
        {filtered.map((val) => (
          <Todo id={val.id} name={val.name} completed={!val.completed} handleCompleted={handleCompleted} />
        ))
        }
        <button onClick={this.toggleShowAll}>Hide Completed</button>
        
      </div>
    )
  }
}
