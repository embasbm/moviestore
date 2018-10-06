import React, { Component } from 'react';
import axios from 'axios';
import { Panel, Badge, ListGroup, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';

class MovieRow extends Component {
  constructor(props) {
    super(props);

    this.deleteMovie = this.deleteMovie.bind(this);
  }

  deleteMovie(id) {
    axios.delete('/api/v1/movies/' + id)
      .then(response => {
        this.props.getMovies()
      })
      .catch(error => console.log(error))
  }

  render() {
    const { movie, category } = this.props;

    return (
      <tr>
        <td>
          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title componentClass="h3">
                {movie && movie.title}
                <Badge>{category ? category.name : 'N/A'}</Badge>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>{movie && movie.text}</Panel.Body>
            <ListGroup>
              <ListGroupItem>
                <ButtonToolbar>
                  {/* <Button bsStyle="info" onClick={() => editingMovie(movie.id)}>Edit</Button> */}
                  <Button bsStyle="danger" onClick={() => this.deleteMovie(movie.id)}>Erase</Button>
                </ButtonToolbar>
              </ListGroupItem>
            </ListGroup>
          </Panel>
        </td>
      </tr>
    )
  }
}

export default MovieRow;
