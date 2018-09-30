import React, { Component } from 'react';
import { ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
class EditMovieForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.movie.id,
      title: this.props.movie.title,
      text: this.props.movie.text
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, title, text } = this.state;
    this.props.editMovie(id, title, text);
  }

  render() {
    return (
      <td>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl
              name="title"
              inputRef={this.titleInput}
              id="movieTitle"
              type="text"
              label="Movie title"
              placeholder={this.state.title}
              onChange={this.handleChange}
            />
            <ControlLabel>Text</ControlLabel>
            <FormControl
              name="text"
              inputRef={this.textInput}
              id="movieText"
              type="text"
              label="Movie text"
              componentClass="textarea"
              placeholder={this.state.text}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit">Update Movie</Button>
        </form>
      </td>
    )
  }
}
export default EditMovieForm;
