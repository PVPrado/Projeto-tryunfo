import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attribute3 extends Component {
  render() {
    const { cardAttr3, onInputChange } = this.props;
    return (
      <label htmlFor="Attr1">
        Terceiro atributo:
        <input
          id="Attr1"
          type="number"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
          name="attr3"
        />
      </label>
    );
  }
}

Attribute3.propTypes = {
  cardAttr3: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Attribute3;
