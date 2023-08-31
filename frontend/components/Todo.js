import React from 'react'

export default class Todo extends React.Component {

  //Takes in the todo data in App, display it to the screen

  render() {
    const { name, key, completed } = this.props
    return (
      <div className="todo">
        <h1 key={key}>{name}</h1><img className="img" src="https://static-00.iconduck.com/assets.00/checkmark-icon-512x426-8re0u9li.png" hidden={completed} />
      </div>
    )
  }
}
