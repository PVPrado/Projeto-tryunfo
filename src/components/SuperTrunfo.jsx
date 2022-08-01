import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SuperTrunfo extends Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label htmlFor="ST">
        Esta carta é Super Trunfo:
        <input
          id="ST"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ checked }
          onChange={ onChange }
          name="Trunfo"
        />
      </label>
    );
  }
}

SuperTrunfo.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SuperTrunfo;
