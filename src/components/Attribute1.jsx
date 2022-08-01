import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attribute1 extends Component {
  render() {
    const { cardAttr1, onInputChange } = this.props;
    return (
      <label htmlFor="Attr1">
        Primeiro atributo:
        <input
          id="Attr1"
          type="number"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
          name="attr1"
        />
      </label>
    );
  }
}

Attribute1.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Attribute1;
