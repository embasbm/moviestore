import React, { Component } from 'react';
import { ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
class EditMovieForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.movie.id,
      title: this.props.movie.title,
      text: this.props.movie.text,
      category_id: this.props.movie.category_id
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, title, text, category_id } = this.state;
    this.props.editMovie(id, title, text, category_id);
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
              value={this.state.title}
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
              value={this.state.text}
              onChange={this.handleChange}
            />
            <ControlLabel>Category</ControlLabel>
            <FormControl
              name="category_id"
              componentClass="select"
              placeholder="select"
              inputRef={ref => { this.categoryId = ref; }}
              onChange={this.handleChange}
            >
              {this.props.categories && this.props.categories.map(category => {
                return (
                  <option key={category.id} value={category.id} selected={category.id === this.state.category_id ? true : false}>{category.name}</option>
                )
              })}
            </FormControl>
          </FormGroup>
          <Button type="submit">Update Movie</Button>
        </form>
      </td>
    )
  }
}
export default EditMovieForm;
