import React from 'react'

export default class Todo extends React.Component {

  //Takes in the todo data in App, display it to the screen

  render() {
    const { id, name, completed} = this.props
    const {handleCompleted} = this.props
      return (
      <div onClick={() => handleCompleted(id)}>
        {name} {completed && "checked"}
      </div>
    )
  }
}
