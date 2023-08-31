import React from 'react'
import TodoList from "./TodoList"
import Form from "./Form"




export default class App extends React.Component {

  constructor() {
    super()
    this.state = [
      {
       name: "find kids",
       id: "",
       completed: false
      }
    ]
  }

  handleSubmit = () => {
    
  }

  handleChange = (event) => {

  }

  render() {
    return (
      <div>
        Todo App
        <TodoList todos={this.state} />
        <Form />
      </div>
    )
  }
}
