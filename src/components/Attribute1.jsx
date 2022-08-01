import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attribute1 extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="Attr1">
        Primeiro atributo:
        <input
          id="Attr1"
          type="number"
          data-testid="attr1-input"
          value={ value }
          onChange={ onChange }
          name="attr1"
        />
      </label>
    );
  }
}

Attribute1.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Attribute1;
