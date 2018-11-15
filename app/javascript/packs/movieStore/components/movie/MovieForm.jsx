import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Panel, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import * as categoriesActions from '../../actions/categoriesActions';
class MovieForm extends Component {
  componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
    this.props.categoriesActions.fetchCategories();
  }

  render() {
    return (
      <Panel bsStyle="primary">
        <Panel.Body>
          {/* <form onSubmit={this.props.createMovie}> */}
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

MovieForm.propTypes = {
  moviesActions: PropTypes.object,
  categories: PropTypes.array
};

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    categoriesActions: bindActionCreators(categoriesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieForm);
