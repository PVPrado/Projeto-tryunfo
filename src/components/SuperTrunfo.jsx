import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SuperTrunfo extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="ST">
        Esta carta é Super Trunfo:
        <input
          id="ST"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          name="trunfo"
        />
      </label>
    );
  }
}

SuperTrunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SuperTrunfo;
