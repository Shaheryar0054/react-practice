import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counters extends Component {
  componentDidUpdate(prevprops, prevState) {
    if (prevprops.number !== this.props.number) {
      console.log('Component Updated');
    }
  }

  render() {
    return (
      <h1>{this.props.number}</h1>
    );
  }
}

Counters.propTypes = {
  number: PropTypes.number.isRequired,
};
