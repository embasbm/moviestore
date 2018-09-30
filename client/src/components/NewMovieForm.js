import React, { Component } from 'react';

class NewMovieForm extends Component {
  constructor(props) {
    super(props)
    this.titleInput = React.createRef();
    this.textInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onNewMovie(this.titleInput.current.value, this.textInput.current.value)
    this.titleInput.current.value = ''
    this.textInput.current.value = ''
    this.titleInput.current.focus()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={this.titleInput}
          type="text"
          placeholder="Title..." required />
        <input
          ref={this.textInput}
          type="text"
          placeholder="Text..." required />
        <button>Add Movie</button>
      </form>
    )
  }
}

export default NewMovieForm;
