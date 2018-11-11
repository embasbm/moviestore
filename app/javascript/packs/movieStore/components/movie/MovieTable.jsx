import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import MovieRow from './MovieRow'

class MovieTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="movies-container">
        <Table>
          <tbody>
            {movies && movies.map(movie => {
              return (
                <MovieRow
                  key={movie.id}
                  movie={movie}
                  category={movie.category}
                />
              )
            })}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default MovieTable;
