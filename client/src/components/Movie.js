import React, { Component } from 'react';
import { Panel, Badge, ListGroup, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';

class Movie extends Component {
  render() {
    const { movie, category, onremoveMovie, editingMovie} = this.props;
    return (
      <td>
        <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title componentClass="h3">
              {movie.title}
              <Badge>{category ? category.name : 'N/A'}</Badge>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>{movie.text}</Panel.Body>
          <ListGroup>
            <ListGroupItem>
              <ButtonToolbar>
                <Button bsStyle="info" onClick={() => editingMovie(movie.id)}>Edit</Button>
                <Button bsStyle="danger" onClick={() => onremoveMovie(movie.id)}>Erase</Button>
              </ButtonToolbar>
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </td>
    )
  }
}

export default Movie;
