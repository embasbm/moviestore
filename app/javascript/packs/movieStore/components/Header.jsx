import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageHeader bsClass='text-center'>
        {this.props.title}
      </PageHeader>
    )
  }
}

export default Header;
