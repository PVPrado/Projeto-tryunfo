import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attribute2 extends Component {
  render() {
    const { cardAttr2, onInputChange } = this.props;
    return (
      <label htmlFor="Attr1">
        Segundo atributo:
        <input
          id="Attr1"
          type="number"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
          name="attr2"
        />
      </label>
    );
  }
}

Attribute2.propTypes = {
  cardAttr2: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Attribute2;
