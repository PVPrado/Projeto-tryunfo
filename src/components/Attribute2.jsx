import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attribute2 extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="Attr2">
        Segundo atributo:
        <input
          id="Attr2"
          type="number"
          data-testid="attr2-input"
          value={ value }
          onChange={ onChange }
          name="cardAttr2"
        />
      </label>
    );
  }
}

Attribute2.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Attribute2;
