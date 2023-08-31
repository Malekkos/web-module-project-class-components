import React from 'react'

export default class Form extends React.Component {

  //Holds an input field and two buttons, one for adding and one for clearing
  state = {
    name: "",
  }

  onSubmit = event => {
    event.preventDefault()
    const {handleSubmit} = this.props
    handleSubmit(this.state.name)
    this.setState({
      name: ""
    })
  }

  onChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {

    return (
      <>
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.name} onChange={this.onChange} />
        <input type="submit" />
      </form>
      </>
    )
  }
}
