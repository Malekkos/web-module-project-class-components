import React from 'react'
import TodoList from "./TodoList"
import Form from "./Form"

//
//FROM VIDEO \/
//
let id = 0
let getId = () => ++id
//
const sampleData = [
  {
    name: "find kids",
    id: getId(),
    completed: true
   },
   {
    name: "order cologne",
    id: getId(),
    completed: false
  }
]
console.log(sampleData)
export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      sampleData
    }
  }

  handleSubmit = (name) => {
    this.setState({
      ...this.state,
      sampleData: this.state.sampleData.concat({ completed: false, id: getId(), name})
    })
  }
  
  handleCompleted = id => {

    this.setState({
      sampleData: this.state.sampleData.map(item => {
        if (id === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  render() {

    return (
      <div>
        <TodoList todos={this.state.sampleData} handleCompleted={this.handleCompleted} />
        <Form handleSubmit={this.handleSubmit} />
        
          
      </div>
    )
  }
}
