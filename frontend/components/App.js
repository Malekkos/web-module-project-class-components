import React from 'react'
import TodoList from "./TodoList"
import Form from "./Form"




export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: "",
      id: "",
      completed: false
    }
  }

  handleSubmit = () => {
    
  }

  handleChange = (event) => {

  }

  render() {
    return (
      <div>
        Todo App
        <TodoList />
        <Form />
      </div>
    )
  }
}
