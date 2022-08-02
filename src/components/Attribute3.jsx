import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attribute3 extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="Attr3">
        Terceiro atributo:
        <input
          id="Attr3"
          type="number"
          data-testid="attr3-input"
          value={ value }
          onChange={ onChange }
          name="cardAttr3"
        />
      </label>
    );
  }
}

Attribute3.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Attribute3;
