import React, { Component } from 'react';
import axios from 'axios';
import { Panel, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';

class MovieForm extends Component {
  constructor(props) {
    super(props)
    this.titleInput = React.createRef();
    this.textInput = React.createRef();
    this.categoryId = React.createRef();

    this.createMovie = this.createMovie.bind(this);
  }

  createMovie(event) {
    event.preventDefault();
    axios.post('/api/v1/movies.json', {movie: { title: this.titleInput.value, text: this.textInput.value, category_id: this.categoryId.value }})
      .then(()=> {
        this.titleInput.value = ''
        this.textInput.value = ''
        this.categoryId.value = ''
        this.titleInput.focus()
        this.props.getMovies()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {

    return (
      <Panel bsStyle="primary">
        <Panel.Body>
          <form onSubmit={this.createMovie}>
            <FormGroup>
              <ControlLabel>Title</ControlLabel>
              <FormControl
                inputRef={ref => { this.titleInput = ref; }}
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
                {this.props.categories && this.props.categories.map(category => {
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

export default MovieForm;
