import React, { Component } from 'react';
import { Panel, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';

class MovieForm extends Component {

  render() {
    const { categories, actions } = this.props;
    return (
      <Panel bsStyle="primary">
        <Panel.Body>
          <form>
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
                {categories && categories.map(category => {
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
