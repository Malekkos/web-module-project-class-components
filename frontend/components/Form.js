import React from 'react'

export default class Form extends React.Component {

  //Holds an input field and two buttons, one for adding and one for clearing

  render() {
    return (
      <div>
        <input type="text"  />
        <button type="submit">Add</button>
        <button type="reset">Clear</button>
      </div>
    )
  }
}
