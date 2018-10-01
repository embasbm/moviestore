import React, { Component } from 'react';
import { Panel, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';

class NewMovieForm extends Component {
  constructor(props) {
    super(props)
    this.titleInput = React.createRef();
    this.textInput = React.createRef();
    this.categoryId = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onNewMovie(this.titleInput.value, this.textInput.value, this.categoryId.value)
    this.titleInput.value = ''
    this.textInput.value = ''
    this.categoryId.value = ''
    this.titleInput.focus()
  }

  render() {
    return (
      <Panel bsStyle="primary">
        <Panel.Body>
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <ControlLabel>Title</ControlLabel>
              <FormControl
                inputRef={ref => {this.titleInput = ref;}}
                id="movieTitle"
                type="text"
                label="Movie title"
                placeholder="Title..."
              />
              <ControlLabel>Text</ControlLabel>
              <FormControl
                inputRef={ref => { this.textInput = ref; }}
                id="movieText"
                type="text"
                label="Movie text"
                componentClass="textarea"
                placeholder="Text..."
              />
              <ControlLabel>Category</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="select"
                inputRef={ref => { this.categoryId = ref; }}
                >
                {this.props.categories.map(category => {
                  return (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  )
                })}
              </FormControl>
            </FormGroup>
            <Button type="submit">Add Movie</Button>
          </form>
        </Panel.Body>
      </Panel>
    )
  }
}

export default NewMovieForm;
